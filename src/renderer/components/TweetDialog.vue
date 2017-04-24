<template>
<div class="tweet-dialog" v-show="$store.state.TweetDialog.open">
  <form method="dialog">
      <input id="input" placeholder="What`s happning?"/><br>
      <button type="submit" value="cancel" @click="cancel">Cancel</button>
      <button type="submit" value="tweet" @click="tweet">Tweet</button>
  </form>
</div>
</template>

<script>
export default {
  methods: {
    cancel: function () {
      this.$store.dispatch('showTweetDialog');
    },
    tweet: function () {
      this.$store.dispatch('showTweetDialog');
    }
  }
}
</script>

<style lang="scss">
.tweet-dialog {
  background-color: #fff;
  border: solid 1px #aaa;
  border-radius: 5px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 300px;
  height: 100px;
}
</style>
