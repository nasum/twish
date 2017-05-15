<template>
<div class="pane" @scroll="getScrollParam">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Home
      </h5>
      <input class="form-control" type="text" placeholder="Search for someone">
    </li>
    <tweet :status="status" v-for="(status, key) in $store.state.Tweet.tweets" :key="key"></tweet>
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
      timeline_on: true
    }
  },
  methods: {
    getScrollParam: function (e) {
      scroll = e.target.scrollTop;

      if (scroll == 0) {
        this.$store.dispatch('startTimeline');
        this.timeline_on = true;
      } else {
        if (this.timeline_on == true) {
          this.$store.dispatch('stopTimeline');
          this.timeline_on = false;
        }
      }
    }
  },
  created () {
    this.$store.dispatch('initHomeTimeline')
  }
}
</script>

<style src="css/timeline.css"></style>
