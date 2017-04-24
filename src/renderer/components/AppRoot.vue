<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header" style="-webkit-app-region: drag;">
        <h1 class="title"></h1>
      </header>
      <app-main></app-main>
      <tweet-dialog></tweet-dialog>
    </div>
  </div>
</template>

<script>
import AppMain     from './AppMain.vue';
import TweetDialog from './TweetDialog';

export default {
  components: {
    AppMain:     AppMain,
    TweetDialog: TweetDialog
  }
}
</script>

<style src="css/photon.css"></style>
