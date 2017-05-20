<template>
<transition name="fade">
  <div class="grass-pane" v-show="$store.state.RetweetDialog.open" @click="clickGrassPane">
    <div class="retweet-dialog dialog" @click.stop>
      <div class="pull-left">
        <img class="img-circle media-object" :src="$store.state.RetweetDialog.profile_image_url" width="50" height="50">
      </div>
      <div class="media-body">
        <strong>{{ $store.state.RetweetDialog.name }}</strong><span>@{{ $store.state.RetweetDialog.screen_name }}</span>
        <p>{{ $store.state.RetweetDialog.text }}</p>
        <div>
          <ul class="media-list">
            <li class="media" v-for="media in $store.state.RetweetDialog.mediaList">
              <img v-bind:src="media.media_thumb" @click="showMediaDialog(media.media_small)">
            </li>
          </ul>
        </div>
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
.retweet-dialog {
  padding: 10px;
  width: 600px;
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
