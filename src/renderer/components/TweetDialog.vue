<template>
<transition name="fade" v-on:enter="enter">
  <div class="grass-pane" v-show="$store.state.TweetDialog.open" @click="clickGrassPane">
    <div class="tweet-dialog dialog" @click.stop>
      <form class="tweet-form" method="dialog">
          <textarea class="tweet-area" placeholder="What`s happning?" v-model="$store.state.TweetDialog.message"></textarea><br>
          <div class="btn-group pull-right">
            <button
              type="submit"
              class="btn btn-large btn-default"
              value="cancel"
              @click="cancel">Cancel</button>
            <button
              type="submit"
              class="btn btn-large btn-primary"
              value="tweet"
              @click="tweet"
              v-shortkey="['ctrl', 'enter']"
              @shortkey="tweet">Tweet</button>
          </div>
      </form>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'TweetDialog',
  methods: {
    clickGrassPane: function () {
      this.$store.dispatch('closeTweetDialog');
    },
    cancel: function () {
      this.$store.dispatch('closeTweetDialog');
    },
    tweet: function () {
      this.$store.dispatch('sendTweet');
    },
    enter: function () {
      document.getElementsByClassName('tweet-area')[0].focus();
    }
  }
}
</script>

<style lang="scss">
.tweet-dialog {
  width: 600px;
  padding: 10px;
}
.tweet-area {
  width: 100%;
  margin-bottom: 5px;
}

.btn-area {
  display: flex;
  justify-content: space-around;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
