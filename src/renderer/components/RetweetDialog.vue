<template>
<transition name="fade">
  <div class="grass-pane" v-show="$store.state.RetweetDialog.open" @click="clickGrassPane">
    <div class="retweet-dialog" @click.stop>
      <div class="pull-left">
        <img class="img-circle media-object" :src="$store.state.RetweetDialog.profile_image_url" width="50" height="50">
      </div>
      <div class="media-body">
        <strong>{{ $store.state.RetweetDialog.name }}</strong><span>@{{ $store.state.RetweetDialog.screen_name }}</span>
        <p>{{ $store.state.RetweetDialog.text }}</p>
        <div>
          {{ $store.state.RetweetDialog.date }}
        </div>
      </div>
      <div class="btn-group pull-right">
        <button type="submit" class="btn btn-large btn-default" value="cancel" @click="cancel">Cancel</button>
        <button type="submit" class="btn btn-large btn-primary" value="tweet" @click="retweet">Tweet</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'RetweetDialog',
  methods: {
    clickGrassPane: function () {
      this.$store.dispatch('closeRetweetDialog');
    },
    cancel: function () {
      this.$store.dispatch('closeRetweetDialog');
    },
    retweet: function () {
      this.$store.dispatch('sendRetweet');
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
  width: 600px;
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
