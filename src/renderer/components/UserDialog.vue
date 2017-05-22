<template>
  <transition name="fade">
    <div class="grass-pane" v-show="$store.state.UserDialog.open" @click="clickGrassPane">
      <div class="user-dialog dialog" @click.stop>
        <div class="user-dialog-header" v-bind:style="styleObject">
          <div class="header-inner">
            <img class="img-circle media-object" :src="$store.state.UserDialog.profile_image_url" width="73" height="73">
            <div>
              {{ $store.state.UserDialog.name }}
            </div>
            <div>
              <span class="icon icon-twitter-circled"></span>
              <a href="javascript:void(0)" @click="clickLink($store.state.UserDialog.twitter_url)">
                @{{ $store.state.UserDialog.screen_name }}
              </a>
              <button class="btn btn-positive" v-if="!$store.state.UserDialog.following">following</button>
              <button class="btn btn-negative" v-if="$store.state.UserDialog.following">remove</button>
            </div>
            <div>
              {{ $store.state.UserDialog.description }}
            </div>
            <div v-if="$store.state.UserDialog.url">
              url: <a href="javascript:void(0)" @click="clickLink($store.state.UserDialog.url)">{{ $store.state.UserDialog.url }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import electron from 'electron';
const Shell = electron.shell;

export default {
  name: 'UserDailog',
  computed: {
    styleObject: function () {
      return {
        backgroundSize: 'cover',
        backgroundImage: `url(${this.$store.state.UserDialog.profile_banner_url})`
      }
    },
    follow: function () {
      return this.$store.state.UserDialog.following;
    },
    notFollow: function () {
      return !this.$store.state.UserDialog.following;
    }
  },
  methods: {
    clickGrassPane: function () {
      this.$store.dispatch('closeUserDialog');
    },
    clickLink: function (url) {
      Shell.openExternal(url);
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  cursor: text;
  text-align: center;
}
a {
  color: #fff;
  cursor: pointer;
}
.user-dialog {
  width: 600px;
}
.user-dialog-header {
  color: #fff;
  height: 200px;
}
.header-inner {
  background: linear-gradient(to bottom, rgba(211,211,211,0), rgba(0,0,0,1));
  height: 100%;
  padding: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
