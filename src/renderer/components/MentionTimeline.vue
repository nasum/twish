<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Mention
      </h5>
    </li>
    <li class="list-group-item" v-for="(status, key) in $store.state.Tweet.mentions" :key="key" @click='showDetail'>
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
  methods: {
    showDetail: function () {
      const selectedText = window.getSelection().toString();
      if (selectedText.length == 0) this.$store.dispatch('showTweetStatusDialog');
    }
  },
  created () {
    this.$store.dispatch('initMentionTimeline')
  }
}
</script>

<style src="css/timeline.css"></style>
