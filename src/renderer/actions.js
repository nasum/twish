import twitterClient from './TwitterClient';

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
  obj.status.favorited = true;
  client.post('favorites/create', { id: obj.status.id }, function (error, tweet, response) {
    if (error) {
      throw error;
    }
  });
}

function _destroyLike (client, context, obj) {
  obj.status.favorited = false;
  client.post('favorites/destroy', { id: obj.status.id }, function (error, tweet, response) {
    if (error) {
      throw error;
    }
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

function _following (client, context, obj) {
  const options = {
    screen_name: obj.screen_name,
    user_id: obj.user_id,
    follow: false
  };
  client.post('friendships/create', options, function (error, tweet, response) {
    if (error) {
      throw error;
    }
    // TODO sync all timeline
    context.commit('changeUserData', 'FOLLOWING');
  });
}

function _remove (client, context, obj) {
  const options = {
    screen_name: obj.screen_name,
    user_id: obj.user_id
  };
  client.post('friendships/destroy', options, function (error, tweet, response) {
    if (error) {
      throw error;
    }
    // TODO sync all timeline
    context.commit('changeUserData', 'REMOVE');
  });
}

export default {
  startTimeline (context) {
    context.commit('startTimeline');
  },
  stopTimeline (context) {
    context.commit('stopTimeline');
  },
  initMentionTimeline (context) {
    twitterClient(_initMentionTimeline, context);
  },
  initDirectMessage (context) {
    twitterClient(_initDirectMessage, context);
  },
  showTweetDialog (context, obj) {
    context.commit('showTweetDialog', obj);
  },
  closeTweetDialog (context) {
    context.commit('closeTweetDialog');
  },
  sendTweet (context) {
    twitterClient(_sendTweet, context);
  },
  syncMessage (context, obj) {
    context.commit('syncMessage', obj);
  },
  createLike (context, obj) {
    twitterClient(_createLike, context, obj);
  },
  destroyLike (context, obj) {
    twitterClient(_destroyLike, context, obj);
  },
  showRetweetDialog (context, obj) {
    context.commit('showRetweetDialog', obj);
  },
  closeRetweetDialog (context) {
    context.commit('closeRetweetDialog');
  },
  showUserDialog (context, obj) {
    context.commit('showUserDialog', obj);
  },
  closeUserDialog (context) {
    context.commit('closeUserDialog');
  },
  setTweetStatusDialog (context, status) {
    context.commit('setTweetStatusDialog', status);
  },
  showTweetStatusDialog (context) {
    context.commit('showTweetStatusDialog');
  },
  closeTweetStatusDialog (context) {
    context.commit('closeTweetStatusDialog');
  },
  sendRetweet (context) {
    twitterClient(_sendRetweet, context);
  },
  showMediaDialog (context, obj) {
    context.commit('showMediaDialog', obj);
  },
  closeMediaDialog (context) {
    context.commit('closeMediaDialog');
  },
  following (context, obj) {
    twitterClient(_following, context, obj);
  },
  remove (context, obj) {
    twitterClient(_remove, context, obj);
  }
};
