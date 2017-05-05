<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header" style="-webkit-app-region: drag;">
        <h1 class="title"></h1>
      </header>
      <app-main></app-main>
      <tweet-dialog></tweet-dialog>
      <retweet-dialog></retweet-dialog>
    </div>
  </div>
</template>

<script>
import AppMain       from './AppMain.vue';
import TweetDialog   from './TweetDialog';
import RetweetDialog from './RetweetDialog';

export default {
  components: {
    AppMain:     AppMain,
    TweetDialog: TweetDialog,
    RetweetDialog: RetweetDialog
  }
}
</script>

<style src="css/photon.css"></style>
