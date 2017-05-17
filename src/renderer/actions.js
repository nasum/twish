import storage from 'electron-json-storage';
import Twitter from 'twitter';

let stream;

function execute (func, context, obj) {
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

function _initHomeTimeline (client, context) {
  let user;
  client.get('account/settings', {}, function (error, data, response) {
    if (!error) {
      user = data;
    }
  });

  client.get('statuses/home_timeline', { count: 100 }, function (error, tweets, response) {
    if (!error) {
      context.commit('getHomeTimeline', tweets);
    }
  });

  stream = client.stream('user');
  stream.on('data', (tweet) => {
    if (tweet.in_reply_to_screen_name === user.screen_name) {
      new Notification(`Reply @${tweet.user.screen_name}`, {
        body: tweet.text
      });
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
  const tweetParams = {
    status: context.state.TweetDialog.message,
    in_reply_to_status_id: context.state.TweetDialog.target_tweet_id
  };
  client.post('statuses/update', tweetParams, function (error, tweet, response) {
    if (error) {
      throw error;
    }
    context.commit('closeTweetDialog');
  });
}

function _createLike (client, context, obj) {
  client.post('favorites/create', { id: obj.status.id }, function (error, tweet, response) {
    if (error) {
      throw error;
    }

    obj.status.favorited = true;
  });
}

function _destroyLike (client, context, obj) {
  client.post('favorites/destroy', { id: obj.status.id }, function (error, tweet, response) {
    if (error) {
      throw error;
    }

    obj.status.favorited = false;
  });
}

function _sendRetweet (client, context) {
  client.post('statuses/retweet/', { id: context.state.RetweetDialog.target_tweet_id }, function (error, tweet, response) {
    if (error) {
      throw error;
    }
    context.commit('closeRetweetDialog');
  });
}

export default {
  initHomeTimeline (context) {
    execute(_initHomeTimeline, context);
  },
  startTimeline (context) {
    context.commit('startTimeline');
  },
  stopTimeline (context) {
    context.commit('stopTimeline');
  },
  initMentionTimeline (context) {
    execute(_initMentionTimeline, context);
  },
  initDirectMessage (context) {
    execute(_initDirectMessage, context);
  },
  showTweetDialog (context, obj) {
    context.commit('showTweetDialog', obj);
  },
  closeTweetDialog (context) {
    context.commit('closeTweetDialog');
  },
  sendTweet (context) {
    execute(_sendTweet, context);
  },
  syncMessage (context, obj) {
    context.commit('syncMessage', obj);
  },
  createLike (context, obj) {
    execute(_createLike, context, obj);
  },
  destroyLike (context, obj) {
    execute(_destroyLike, context, obj);
  },
  showRetweetDialog (context, obj) {
    context.commit('showRetweetDialog', obj);
  },
  closeRetweetDialog (context) {
    context.commit('closeRetweetDialog');
  },
  sendRetweet (context) {
    execute(_sendRetweet, context);
  },
  showMediaDialog (context, obj) {
    context.commit('showMediaDialog', obj);
  },
  closeMediaDialog (context) {
    context.commit('closeMediaDialog');
  }
};
