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

function _initHomeTimeline (client, context) {
  client.get('statuses/home_timeline', {}, function (error, tweets, response) {
    if (!error) {
      context.commit('getHomeTimeline', tweets);
    }
  });

  const stream = client.stream('user');
  stream.on('data', (tweet) => {
    context.commit('addTweet', tweet);
  });
}

function _initMentionTimeline (client, context) {
  client.get('statuses/mentions_timeline', {}, function (error, tweets, response) {
    if (!error) {
      context.commit('getMentionTimeline', tweets);
    }
  });
}

export default {
  initHomeTimeline (context) {
    execute(_initHomeTimeline, context);
  },
  initMentionTimeline (context) {
    execute(_initMentionTimeline, context);
  },
  showTweetDialog (context) {
    context.commit('showTweetDialog', context);
  }
};
