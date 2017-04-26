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
  let user;
  client.get('account/settings', {}, function (error, data, response) {
    if (!error) {
      user = data;
    }
  });

  client.get('statuses/home_timeline', {}, function (error, tweets, response) {
    if (!error) {
      context.commit('getHomeTimeline', tweets);
    }
  });

  const stream = client.stream('user');
  stream.on('data', (tweet) => {
    if (tweet.in_reply_to_screen_name === user.screen_name) {
      context.commit('addMention', tweet);
    }
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

function _initDirectMessage (client, context) {
  client.get('direct_messages', {}, function (error, messages, response) {
    if (!error) {
      context.commit('getDirectMessage', messages);
    }
  });
}

function _sendTweet (client, context) {
  client.post('statuses/update', { status: context.state.TweetDialog.message }, function (error, tweet, response) {
    if (error) {
      throw error;
    }
    context.state.TweetDialog.message = '';
  });
}

export default {
  initHomeTimeline (context) {
    execute(_initHomeTimeline, context);
  },
  initMentionTimeline (context) {
    execute(_initMentionTimeline, context);
  },
  initDirectMessage (context) {
    execute(_initDirectMessage, context);
  },
  showTweetDialog (context) {
    context.commit('showTweetDialog', context);
  },
  sendTweet (context) {
    execute(_sendTweet, context);
  }
};
