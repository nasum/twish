<template>
<transition name="fade">
  <div class="grass-pane" v-show="$store.state.MediaDialog.open" @click="clickGrassPane">
    <div class="retweet-dialog dialog">
      <img v-bind:src="$store.state.MediaDialog.imageUrl">
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'MediaDialog',
  methods: {
    clickGrassPane: function () {
      this.$store.dispatch('closeMediaDialog');
    }
  }
}
</script>

<style lang="scss">
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
