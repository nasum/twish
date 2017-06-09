<template>
  <transition name="fade">
    <div class="grass-pane" v-show="$store.state.TweetStatusDialog.open" @click="clickGrassPane">
      <div class="tweet-status-dialog dialog" @click.stop>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TweetStatusDialog',
  methods: {
    clickGrassPane: function () {
      this.$store.dispatch('closeTweetStatusDialog');
    }
  }
}
</script>

<style lang="scss">
.tweet-status-dialog {
  width: 600px;
  padding: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
