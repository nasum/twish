const state = {
  tweets: []
};

const mutations = {
  getHomeTimeline (state, tweets) {
    tweets.forEach((tweet) => {
      state.tweets.unshift(tweet);
    });
  },
  addTweet (state, tweet) {
    state.tweets.unshift(tweet);
  }
};

export default {
  state,
  mutations
};
