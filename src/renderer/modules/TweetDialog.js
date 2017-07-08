import TweetStatus from '../data/TweetStatus';

const state = {
  open: false,
  message: '',
  target_tweet_id: '',
  target_user_id: ''
};

const mutations = {
  showTweetDialog (state, obj) {
    const tweet = new TweetStatus(obj.status);

    if (state.open) {
      return;
    }
    state.open = true;
    if (obj) {
      state.target_tweet_id = obj.status.id;
      state.target_user_id = obj.status.user.id;
      state.message = `@${obj.status.user.screen_name} ${tweet.getHashTags().join(' ')}`;
    } else {
      state.target_tweet_id = '';
      state.target_user_id = '';
      state.message = '';
    }
  },
  closeTweetDialog (state) {
    state.target_tweet_id = '';
    state.target_user_id = '';
    state.message = '';
    state.open = false;
  },
  syncMessage (state, obj) {
    state.message = obj.message;
  }
};

export default {
  state,
  mutations
};
