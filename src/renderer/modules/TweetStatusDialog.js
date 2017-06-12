import TweetStatus from '../data/TweetStatus';

const state = {
  open: false,
  status: new TweetStatus()
};

const mutations = {
  showTweetStatusDialog (state) {
    state.open = true;
  },
  closeTweetStatusDialog (state) {
    state.open = false;
  },
  setTweetStatusDialog (state, status) {
    state.status = status;
  }
};

export default {
  state,
  mutations
};
