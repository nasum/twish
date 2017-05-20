<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Messages
      </h5>
    </li>
    <li class="list-group-item" v-for="message in $store.state.Tweet.directMessages">
      <message-item :status="message"></message-item>
    </li>
  </ul>
</div>
</template>

<script>
import MessageItem from './MessageItem';
export default {
  components: {
    MessageItem: MessageItem
  },
  created () {
    this.$store.dispatch('initDirectMessage')
  }
}
</script>

<style src="css/timeline.css"></style>
