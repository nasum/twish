<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header">
        <h1 class="title"></h1>
      </header>
      <div class="window-content">
        <div class="pane-group">
          <side-bar></side-bar>
          <home-timeline></home-timeline>
          <notification-timeline></notification-timeline>
          <message-timeline></message-timeline>
        </div>
      </div>
    </div>
    <pin-form-dialog></pin-form-dialog>
  </div>
</template>

<script>
import PinFormDialog        from './PinFormDialog';
import SideBar              from './SideBar';
import HomeTimeline         from './HomeTimeline';
import NotificationTimeline from './NotificationTimeline';
import MessageTimeline      from './MessageTimeline';

export default {
  components: {
    PinFormDialog:        PinFormDialog,
    SideBar:              SideBar,
    HomeTimeline:         HomeTimeline,
    NotificationTimeline: NotificationTimeline,
    MessageTimeline:      MessageTimeline
  }
}
</script>
