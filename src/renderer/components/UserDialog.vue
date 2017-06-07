<template>
  <transition name="fade">
    <div class="grass-pane" v-show="$store.state.UserDialog.open" @click="clickGrassPane">
      <div class="user-dialog dialog" v-bind:style="dialogStyleObject" @click.stop>
        <div class="user-dialog-header" v-bind:style="headerStyleObject">
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
            </div>
            <div>
              {{ $store.state.UserDialog.description }}
            </div>
            <div v-if="$store.state.UserDialog.url">
              url: <a href="javascript:void(0)" @click="clickLink($store.state.UserDialog.url)">{{ $store.state.UserDialog.url }}</a>
            </div>
          </div>
        </div>
        <div class="action-area">
          <div class="action-item">
            <span>tweets : </span><span>{{ $store.state.UserDialog.statuses_count }}</span>
          </div>
          <div class="action-item">
            <span>fav : </span><span>{{ $store.state.UserDialog.favourites_count }}</span>
          </div>
          <div class="action-item">
            <button class="btn" @click="clickFollow" :class="{ 'btn-positive': !$store.state.UserDialog.following, 'btn-negative': $store.state.UserDialog.following }">
              <span v-if="$store.state.UserDialog.following">
                remove
              </span>
              <span v-if="!$store.state.UserDialog.following">
                following
              </span>
            </button>
            <button class="btn btn-default" @click="clickList">
              <span class="icon icon-list"></span>list
            </button>
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
    headerStyleObject: function () {
      let styleObject = {
        backgroundSize: 'cover'
      }

      const backgroundImageUrl = this.$store.state.UserDialog.profile_banner_url;
      const backgroundColor = this.$store.state.UserDialog.profile_background_color;

      if(backgroundImageUrl) styleObject['backgroundImage'] = `url("${backgroundImageUrl}")`;
      if(backgroundColor) styleObject['backgroundColor'] = backgroundColor;

      return styleObject;
    },
    dialogStyleObject: function() {
      return {
        color: `${this.$store.state.UserDialog.profile_text_color}`
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
    },
    clickFollow: function () {
      if (this.$store.state.UserDialog.following) {
        this.$store.dispatch('remove', this.$store.state.UserDialog);
      } else {
        this.$store.dispatch('following', this.$store.state.UserDialog);
      }
    },
    clickList: function () {

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
.btn {
  cursor: pointer;
  span {
    cursor: pointer;
  }
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
.action-area {
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
}
.action-item {
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
