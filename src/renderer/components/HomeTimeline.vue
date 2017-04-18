<template>
<div class="pane">
  <ul class="list-group">
    <li class="list-group-header">
      <h5>
        Home
      </h5>
      <input class="form-control" type="text" placeholder="Search for someone">
    </li>
    <tweet></tweet>
  </ul>
</div>
</template>

<script>
import Tweet from './Tweet';
export default {
  components: {
    Tweet: Tweet
  }
}
</script>

<style lang="scss" scoped>
.pane {
  width: 350px;
  height: 100%;
}
</style>
