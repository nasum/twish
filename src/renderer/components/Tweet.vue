<template>
<li class="list-group-item">
  <tweet-status :status="status"></tweet-status>
</li>
</template>

<script>
import TweetStatus from './TweetStatus';

export default {
  props: ['status'],
  components: {
    TweetStatus: TweetStatus
  }
}
</script>

<style lang="scss">
.user-content {
  text-align: center;
  padding-right: 10px;
}

.retweet-user {
  span, img {
    font-size: 20px;
    vertical-align: middle;
  }
}

.user-thumb {
  cursor: pointer;
}

.tweet-time {
  cursor: pointer;
  color: #414142;
  cursor: pointer;
}

.media-list {
  padding: 0px;

  img {
    cursor: pointer;
  }
}

.action-area {
  font-size: 20px;

  .reaction {
    cursor: pointer;
  }
}

.fav-enter-active, .fav-leave-active {
  transition: all .3s ease;
}
.fav-enter, .fav-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
