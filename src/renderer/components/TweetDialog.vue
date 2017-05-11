<template>
<transition name="fade" v-on:enter="enter">
  <div class="grass-pane" v-show="$store.state.TweetDialog.open" @click="clickGrassPane">
    <div class="tweet-dialog" @click.stop>
      <form class="tweet-form" method="dialog">
          <textarea class="tweet-area" placeholder="What`s happning?" v-model="$store.state.TweetDialog.message"></textarea><br>
          <div class="btn-group pull-right">
            <button
              type="submit"
              class="btn btn-large btn-default"
              value="cancel"
              @click="cancel"
              v-shortkey.push="['enter']"
              @shortkey="cancel">Cancel</button>
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
.grass-pane {
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
}
.tweet-dialog {
  background-color: #fff;
  border: solid 1px #aaa;
  border-radius: 5px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
  width: 300px;
  height: 100px;
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
