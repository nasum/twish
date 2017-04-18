<template>
<div>
  <div class="window">
    <header class="toolbar toolbar-header">
      <h1 class="title">Twish</h1>
    </header>
    <div class="window-content">
      <div class="form-content">
        <h2>Twish</h2>
        <form>
          <div class="form-group">
            <label>
              PIN
            </label>
            <input type="text" class="form-control" placeholder="ENTER PIN">
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-form btn-default" @click="showPin">Show PIN</button>
            <button type="submit" class="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <pin-form-dialog></pin-form-dialog>
</div>
</template>

<script>
import { ipcRenderer } from 'electron';
import PinFormDialog from './PinFormDialog';

export default {
  methods: {
    showPin: () => {
      ipcRenderer.send('AUTH');
    }
  },
  components: {
    PinFormDialog: PinFormDialog
  }
}
</script>

<style lang="scss">
  header {
    -webkit-app-region: drag;
  }
  .form-content {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
