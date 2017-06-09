const state = {
  open: false
};

const mutations = {
  showTweetStatusDialog (status) {
    status.open = true;
  },
  closeTweetStatusDialog (status) {
    status.open = false;
  }
};

export default {
  state,
  mutations
};
