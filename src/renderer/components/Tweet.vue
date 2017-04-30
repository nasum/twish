<template>
<div>
  <img class="img-circle media-object pull-left" :src="status.user.profile_image_url" width="50" height="50">
  <div class="media-body">
    <strong>{{status.user.name}}</strong><span>@{{ status.user.screen_name }}</span>
    <p>{{status.text}}</p>
    <div>
      {{status.created_at}}
    </div>
    <div class="action-area">
      <span class="icon icon-reply reaction" @click="reply"></span>
      <span class="icon icon-retweet reaction"></span>
      <span class="icon reaction" v-bind:class="{ 'icon-heart': status.favorited, 'icon-heart-empty': !status.favorited }" @click="like"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['status'],
  methods: {
    showDetail: function () {

    },
    reply: function () {
      this.$store.dispatch('showTweetDialog', { status: this.status });
    },
    retweet: function () {

    },
    like: function () {
      if (this.status.favorited) {
        this.$store.dispatch('destroyLike', { status: this.status });
      } else {
        this.$store.dispatch('createLike', { status: this.status });
      }
    }
  }
}
</script>

<style lang="scss">
.action-area {
  font-size: 20px;

  .reaction {
    cursor: pointer;
  }
}
</style>
