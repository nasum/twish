<template>
  <div class="window-content">
    <div class="pane-group">
      <side-bar></side-bar>
      <home-timeline></home-timeline>
      <notification-timeline></notification-timeline>
      <message-timeline></message-timeline>
    </div>
  </div>
</template>

<script>
import SideBar              from './SideBar';
import HomeTimeline         from './HomeTimeline';
import NotificationTimeline from './NotificationTimeline';
import MessageTimeline      from './MessageTimeline';

export default {
  components: {
    SideBar:              SideBar,
    HomeTimeline:         HomeTimeline,
    NotificationTimeline: NotificationTimeline,
    MessageTimeline:      MessageTimeline
  }
}
</script>
