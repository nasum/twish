<template>
<div>
  <img class="img-circle media-object pull-left" :src="status.user.profile_image_url" width="32" height="32">
  <div class="media-body">
    <strong>{{status.user.name}}</strong>
    <p>{{status.text}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: ['status'],
  created () {
    console.log(this.status)
  }
}
</script>
