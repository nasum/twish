<template>
<div class="pane-sm sidebar">
  <nav class="nav-group">
    <h5 class="nav-group-title">Favorites</h5>
    <button class="btn btn-large btn-primary" @click="showTweetDialog">Primary</button>
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
