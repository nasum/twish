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
    setMention(state.mentions, tweets);
  },
  getDirectMessage (state, tweets) {
    setTweets(state.directMessages, tweets);
  },
  addTweet (state, tweet) {
    state.tweets.unshift(tweet);
  }
};

function setTweets (target, tweets) {
  tweets.forEach((tweet) => {
    target.unshift(tweet);
  });
}

function setMention (target, messages) {
  messages.forEach((message) => {
    target.unshift(message);
  });
}

export default {
  state,
  mutations
};
