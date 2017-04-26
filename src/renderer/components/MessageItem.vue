<template>
<div>
  <img class="img-circle media-object pull-left" :src="status.sender.profile_image_url" width="50" height="50">
  <div class="media-body">
    <strong>{{status.sender_screen_name}}</strong>
    <p>{{status.text}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: ['status']
}
</script>
