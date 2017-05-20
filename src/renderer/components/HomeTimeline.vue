<template>
<div class="pane" @scroll="getScrollParam">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Home
      </h5>
    </li>
    <tweet :status="status" v-for="(status, key) in sliceTweets" :key="key"></tweet>
    <li class="list-group-item more-area">
      <button class="btn btn-large btn-primary more-btn" @click="getMore">more</button>
    </li>
  </ul>
</div>
</template>

<script>
import Tweet from './Tweet';

export default {
  components: {
    Tweet: Tweet,
  },
  data: function () {
    return {
      timelineOn: true,
      displayCount: 100,
    }
  },
  computed: {
    sliceTweets: function(){
      return this.$store.state.Tweet.tweets.slice(0, this.displayCount);
    }
  },
  methods: {
    getScrollParam: function (e) {
      scroll = e.target.scrollTop;

      if (scroll == 0) {
        this.$store.dispatch('startTimeline');
        this.timelineOn = true;
        this.displayCount = 100;
      } else {
        if (this.timelineOn == true) {
          this.$store.dispatch('stopTimeline');
          this.timelineOn = false;
        }
      }
    },
    getMore: function () {
      this.displayCount += 10;
    }
  },
  created () {
    this.$store.dispatch('initHomeTimeline');
  }
}
</script>

<style src="css/timeline.css"></style>
