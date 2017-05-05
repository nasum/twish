<template>
<transition name="fade">
  <div class="grass-pane" v-show="$store.state.MediaDialog.open" @click="clickGrassPane">
    <div class="retweet-dialog">
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
.grass-pane {
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
}
.retweet-dialog {
  background-color: #fff;
  border: solid 1px #aaa;
  border-radius: 5px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
  width: auto;
  padding: 10px;
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
