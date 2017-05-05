const state = {
  open: false,
  imageUrl: ''
};

const mutations = {
  showMediaDialog (state, imageUrl) {
    state.open = true;
    state.imageUrl = imageUrl;
  },
  closeMediaDialog (state) {
    state.open = false;
  }
};

export default {
  state,
  mutations
};
