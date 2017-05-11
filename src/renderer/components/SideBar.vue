<template>
<div class="pane-sm sidebar">
  <nav class="nav-group">
    <h5 class="nav-group-title">Favorites</h5>
    <span class="nav-group-item" @click="showTweetDialog" v-shortkey.push="['n']" @shortkey="showTweetDialog">
      <span class="icon icon-twitter"></span>
      tweet
    </span>
  </nav>
</div>
</template>

<script>
import storage from 'electron-json-storage';

export default {
  methods: {
    showTweetDialog: function(){
      this.$store.dispatch('showTweetDialog');
    }
  }
}
</script>
