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
    state.tweets.unshift(new TweetStatus(tweet));
  },
  addMention (state, tweet) {
    state.mentions.unshift(new TweetStatus(tweet));
  }
};

function setTweets (target, tweets) {
  tweets.forEach((tweet) => {
    target.push(new TweetStatus(tweet));
  });
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
