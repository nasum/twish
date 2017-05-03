<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Mention
      </h5>
      <input class="form-control" type="text" placeholder="Search for someone">
    </li>
    <tweet :status="status" v-for="(status, key) in $store.state.Tweet.mentions" :key="key"></tweet>
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
    this.$store.dispatch('initMentionTimeline')
  }
}
</script>

<style src="css/timeline.css"></style>
