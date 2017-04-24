<template>
  <div class="window-content">
    <div class="pane-group">
      <side-bar></side-bar>
      <div class="timeline-area">
        <div class="timeline-wrap">
          <home-timeline></home-timeline>
          <notification-timeline></notification-timeline>
          <message-timeline></message-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storage from 'electron-json-storage';

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

<style lang="scss" scoped>
.timeline-area{
  width: 100%;
  overflow-x: auto;
}
.timeline-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  overflow-x: auto;
  width: 1200px;
}
</style>
