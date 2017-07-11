import storage from 'electron-json-storage';
import Twitter from 'twitter';

export default function execute (func, context, obj) {
  let client;
  storage.get('oauthInfo', function (err, data) {
    if (err) {
      console.log(err);
    }

    const accessToken = data.accessToken;
    const accessTokenSecret = data.accessTokenSecret;

    client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: accessToken,
      access_token_secret: accessTokenSecret
    });
    func(client, context, obj);
  });

  return client;
}
