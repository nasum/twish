const state = {
  tweets: []
};

const mutations = {
  addTweet (state, tweets) {
    state.push(tweets);
  }
};

export default {
  state,
  mutations
};
