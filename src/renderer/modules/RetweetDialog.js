const state = {
  open: false,
  profile_image_url: '',
  name: '',
  screen_name: '',
  text: '',
  date: '',
  mediaList: [],
  target_tweet_id: ''
};

const mutations = {
  showRetweetDialog (state, obj) {
    state.profile_image_url = obj.profile_image_url;
    state.name = obj.name;
    state.screen_name = obj.screen_name;
    state.text = obj.text;
    state.date = obj.date;
    state.open = true;
    state.mediaList = obj.mediaList;
    state.target_tweet_id = obj.target_tweet_id;
  },
  closeRetweetDialog (state) {
    state.open = false;
  }
};

export default {
  state,
  mutations
};
