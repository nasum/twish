import { OAuth } from 'oauth';
import electron from 'electron';
import storage from 'electron-json-storage';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const shell = electron.shell;
const ipcMain = electron.ipcMain;

import path from 'path';
import url from 'url';

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0A',
  'oob',
  'HMAC-SHA1'
);

let mainWindow;

function createWindow () {
  storage.get('appOptions', function (e, args = { x: 0, y: 0, width: 600, height: 500 }) {
    mainWindow = new BrowserWindow({
      x: args.x,
      y: args.y,
      width: args.width,
      height: args.height,
      titleBarStyle: 'hidden'
    });

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true
    }));

    mainWindow.on('closed', function () {
      mainWindow = null;
    });

    mainWindow.show();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.once('SEND_PIN', (e, args) => {
  const oauthVerifier = args.pin;
  storage.get('oauthInfo', sendPinCallback.bind({ oauthVerifier: oauthVerifier }));
});

function sendPinCallback (error, data) {
  if (error) {
    console.log(error);
  }
  console.log(data);
  console.log(this);
  const oauthToken = data.oauthToken;
  const oauthTokenSecret = data.oauthTokenSecret;
  oauth.getOAuthAccessToken(oauthToken, oauthTokenSecret, this.oauthVerifier, saveOAuth.bind({ data: data }));
}

function saveOAuth (error, accessToken, accessTokenSecret) {
  if (error) {
    console.log(error);
  } else {
    const oauthToken = this.data.oauthToken;
    const oauthTokenSecret = this.data.oauthTokenSecret;
    storage.set('oauthInfo', {
      oauthToken: oauthToken,
      oauthTokenSecret: oauthTokenSecret,
      accessToken: accessToken,
      accessTokenSecret: accessTokenSecret
    });
  }
}

ipcMain.on('AUTH', () => {
  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret) => {
    if (error) return;
    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
    storage.set('oauthInfo', {
      oauthToken: oauthToken,
      oauthTokenSecret: oauthTokenSecret
    });
    shell.openExternal(authUrl);
  });
});
