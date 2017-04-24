const state = {
  tweets: [],
  mentions: []
};

const mutations = {
  getHomeTimeline (state, tweets) {
    setTweets(state.tweets, tweets);
  },
  getMentionTimeline (state, tweets) {
    setTweets(state.mentions, tweets);
  },
  addTweet (state, tweet) {
    state.tweets.unshift(tweet);
  }
};

function setTweets (target, tweets) {
  tweets.forEach((tweet) => {
    target.unshift(tweet);
  });
}

export default {
  state,
  mutations
};
