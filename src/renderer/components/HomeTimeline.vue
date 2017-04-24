<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Home
      </h5>
      <input class="form-control" type="text" placeholder="Search for someone">
    </li>
    <li class="list-group-item" v-for="status in $store.state.Tweet.tweets">
      <tweet :status="status"></tweet>
    </li>
  </ul>
</div>
</template>

<script>
import Tweet from './Tweet';
export default {
  components: {
    Tweet: Tweet
  },
  created () {
    this.$store.dispatch('getHomeTimeline')
  }
}
</script>

<style src="css/timeline.css"></style>
