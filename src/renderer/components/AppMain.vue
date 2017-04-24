<template>
  <div class="window-content">
    <div class="pane-group">
      <side-bar></side-bar>
      <div class="timeline-area">
        <div class="timeline-wrap">
          <home-timeline></home-timeline>
          <mention-timeline></mention-timeline>
          <message-timeline></message-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storage from 'electron-json-storage';

import SideBar         from './SideBar';
import HomeTimeline    from './HomeTimeline';
import MentionTimeline from './MentionTimeline';
import MessageTimeline from './MessageTimeline';

export default {
  components: {
    SideBar:         SideBar,
    HomeTimeline:    HomeTimeline,
    MentionTimeline: MentionTimeline,
    MessageTimeline: MessageTimeline
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
