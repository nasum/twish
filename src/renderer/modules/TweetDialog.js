const state = {
  open: false,
  message: ''
};

const mutations = {
  showTweetDialog (state) {
    state.open = !state.open;
    console.log(state.open);
  },
  updateMessage (state, message) {

  }
};

export default {
  state,
  mutations
};
