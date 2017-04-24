import storage from 'electron-json-storage';
import Twitter from 'twitter';

function execute (func, context) {
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

    func(client, context);
  });

  return client;
}

function _getHomeTimeline (client, context) {
  const stream = client.stream('user');
  stream.on('data', (tweet) => {
    context.commit('addTweet', tweet);
  });
}

export default {
  getHomeTimeline (context) {
    execute(_getHomeTimeline, context);
  }
};
