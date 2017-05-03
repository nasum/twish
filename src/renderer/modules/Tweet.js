import TweetStatus from '../data/TweetStatus';

const state = {
  tweets: [],
  mentions: [],
  directMessages: []
};

const mutations = {
  getHomeTimeline (state, tweets) {
    setTweets(state.tweets, tweets);
  },
  getMentionTimeline (state, tweets) {
    setMentionTweets(state.mentions, tweets);
  },
  getDirectMessage (state, messages) {
    setMessages(state.directMessages, messages);
  },
  addTweet (state, tweet) {
    state.tweets.unshift(new TweetStatus(createTweetStatus(tweet)));
  },
  addMention (state, tweet) {
    state.mentions.unshift(new TweetStatus(tweet));
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

export default {
  state,
  mutations
};
