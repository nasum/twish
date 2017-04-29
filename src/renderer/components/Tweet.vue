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
      <span class="icon icon-reply" @click="reply"></span>
      <span class="icon icon-retweet"></span>
      <span class="icon icon-heart-empty"></span>
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

    }
  }
}
</script>

<style lang="scss">
.action-area {
  font-size: 20px;
}
</style>
