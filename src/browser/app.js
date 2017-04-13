import { OAuth } from 'oauth';
import electron from 'electron';
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const shell = electron.shell;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

import path from 'path';
import url from 'url';

let mainWindow;
let oauthToken;
let oauthTokenSecret;

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0A',
  'oob',
  'HMAC-SHA1'
);

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden-inset'
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
  oauth.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, (error, accessToken, accessTokenSecret) => {
    if (error) {
      console.log(error);
    }
  });
});

ipcMain.on('AUTH', (e, args) => {
  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
    if (error) return;
    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
    shell.openExternal(authUrl);
  });
});
