import twitterClient from '../TwitterClient';
import TweetStatus from '../data/TweetStatus';

const state = {
  displayTweets: [],
  standbyTweets: [],
  tmpTweets: [],
  mentions: [],
  directMessages: [],
  startFlg: true
};

const mutations = {
  getHomeTimeline (state, tweets) {
    setTweets(state.displayTweets, tweets);
  },
  getMentionTimeline (state, tweets) {
    setMentionTweets(state.mentions, tweets);
  },
  getDirectMessage (state, messages) {
    setMessages(state.directMessages, messages);
  },
  addTweet (state, tweet) {
    if (state.startFlg) {
      state.standbyTweets.forEach((tweet) => {
        state.displayTweets.unshift(tweet);
      });
      state.displayTweets.unshift(new TweetStatus(tweet));
      state.standbyTweets = [];
    } else {
      state.standbyTweets.unshift(new TweetStatus(tweet));
    }
  },
  addMention (state, tweet) {
    state.mentions.unshift(new TweetStatus(tweet));
  },
  startTimeline (state) {
    state.startFlg = true;
  },
  stopTimeline (state) {
    state.startFlg = false;
  }
};

const actions = {
  initHomeTimeline (context) {
    twitterClient(_initHomeTimeline, context);
  }
};

function setTweets (target, tweets) {
  tweets.forEach((tweet) => {
    target.push(new TweetStatus(createTweetStatus(tweet)));
  });
}

function createTweetStatus (status) {
  let editStatus;
  if (status.retweeted_status) {
    editStatus = status.retweeted_status;
    editStatus.retweet_user = status.user;
  } else {
    editStatus = status;
  }
  return editStatus;
}

function setMentionTweets (target, tweets) {
  tweets.forEach((tweet) => {
    target.push(new TweetStatus(tweet));
  });
}

function setMessages (target, messages) {
  messages.forEach((message) => {
    target.push(message);
  });
}

function _initHomeTimeline (client, context) {
  let user;
  const stream = client.stream('user');

  client.get('account/settings', {}, function (error, data) {
    if (!error) {
      user = data;
    }
  });

  client.get('statuses/home_timeline', { count: 100, include_entities: true }, function (error, tweets) {
    if (!error) {
      context.commit('getHomeTimeline', tweets);
    }
  });

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

export default {
  state,
  mutations,
  actions
};
