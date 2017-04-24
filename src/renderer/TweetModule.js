const state = {
  tweets: []
};

const mutations = {
  addTweet (state, tweets) {
    state.tweets.unshift(tweets);
  }
};

export default {
  state,
  mutations
};
