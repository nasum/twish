<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Mention
      </h5>
    </li>
    <transition-group name="list" tag="div">
      <tweet :status="status" v-for="(status, key) in $store.state.Tweet.mentions" :key="key"></tweet>
    </transition-group>
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
