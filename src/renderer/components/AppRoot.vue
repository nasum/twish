<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header" style="-webkit-app-region: drag;">
        <h1 class="title"></h1>
      </header>
      <app-main></app-main>
      <tweet-dialog></tweet-dialog>
      <retweet-dialog></retweet-dialog>
      <media-dialog></media-dialog>
    </div>
  </div>
</template>

<script>
import AppMain       from './AppMain.vue';
import TweetDialog   from './TweetDialog';
import RetweetDialog from './RetweetDialog';
import MediaDialog   from './MediaDialog';

export default {
  components: {
    AppMain:     AppMain,
    TweetDialog: TweetDialog,
    RetweetDialog: RetweetDialog,
    MediaDialog: MediaDialog
  }
}
</script>

<style src="css/photon.css"></style>
