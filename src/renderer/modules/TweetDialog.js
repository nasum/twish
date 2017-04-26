const state = {
  open: false,
  message: ''
};

const mutations = {
  showTweetDialog (state) {
    state.open = !state.open;
  },
  sendTweet (state) {

  }
};

export default {
  state,
  mutations
};
