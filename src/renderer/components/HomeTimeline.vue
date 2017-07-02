<template>
<div class="pane" @scroll="getScrollParam">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Home
      </h5>
    </li>
    <transition-group name="list" tag="div">
      <tweet :status="status" v-for="status in sliceTweets" :key="status.id" @click='showDetail(status)'></tweet>
    </transition-group>
    <div class="list-group-item more-area">
      <button class="btn btn-large btn-primary more-btn" @click="getMore">more</button>
    </div>
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
      return this.$store.state.Tweet.displayTweets.slice(0, this.displayCount);
    }
  },
  methods: {
    showDetail: function (status) {
      const selectedText = window.getSelection().toString();
      if (selectedText.length == 0) {
        this.$store.dispatch('setTweetStatusDialog', status);
        this.$store.dispatch('showTweetStatusDialog');
      }
    },
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
