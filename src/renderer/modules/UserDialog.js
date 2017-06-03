const state = {
  open: false,
  id: '',
  profile_image_url: '',
  profile_banner_url: '',
  name: '',
  screen_name: '',
  url: '',
  following: false,
  description: '',
  twitter_url: '',
  statuses_count: 0,
  favourites_count: 0
};

const mutations = {
  showUserDialog (state, user) {
    state.open = true;
    state.id = user.id_str;
    state.profile_image_url = user.profile_image_url.replace(/normal/, 'bigger');
    state.profile_banner_url = user.profile_banner_url;
    state.name = user.name;
    state.screen_name = user.screen_name;
    state.url = user.url;
    state.following = user.following;
    state.description = user.description;
    state.twitter_url = `https://twitter.com/${state.screen_name}`;
    state.statuses_count = user.statuses_count;
    state.favourites_count = user.favourites_count;
  },
  closeUserDialog (state) {
    state.open = false;
  },
  changeUserData (state, obj) {
    if (obj === 'FOLLOWING') {
      state.following = true;
    } else if (obj === 'REMOVE') {
      state.following = false;
    }
  }
};

export default {
  state,
  mutations
};
