<template>
<div>
  <img class="img-circle media-object pull-left" :src="status.user.profile_image_url" width="50" height="50">
  <div class="media-body">
    <strong>{{status.user.name}}</strong>
    <p>{{status.text}}</p>
    <div class="action-area">
      <span class="icon icon-reply"></span>
      <span class="icon icon-retweet"></span>
      <span class="icon icon-heart-empty"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['status']
}
</script>

<style lang="scss">
.action-area {
  font-size: 20px;
}
</style>
