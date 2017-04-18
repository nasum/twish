<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header" style="-webkit-app-region: drag;">
        <h1 class="title"></h1>
      </header>
      <app-main></app-main>
    </div>
    <pin-form-dialog></pin-form-dialog>
  </div>
</template>

<script>
import AppMain       from './AppMain.vue';
import PinFormDialog from './PinFormDialog';

export default {
  components: {
    AppMain:       AppMain,
    PinFormDialog: PinFormDialog
  }
}
</script>

<style src="css/photon.css"></style>
