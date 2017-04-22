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
            <input type="text" class="form-control" placeholder="ENTER PIN" v-model="pin">
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-form btn-default" @click="showPin">Show PIN</button>
            <button type="submit" class="btn btn-form btn-primary" @click="enterPin">OK</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <pin-form-dialog></pin-form-dialog>
</div>
</template>

<script>
import storage from 'electron-json-storage';

import { ipcRenderer } from 'electron';

export default {
  data(){
    return {
      pin: ""
    }
  },
  methods: {
    showPin: function(){
      ipcRenderer.send('AUTH');
    },
    enterPin: function(){
      ipcRenderer.send('SEND_PIN', { pin: this.$data.pin } )
      this.$router.push('app');
    }
  },
  beforeCreate() {
    storage.get('oauthInfo', (error, data) => {
      if (checkOAuth(data)){
        this.$router.push('app');
      } else {
        return
      }
    });
  }
}

function checkOAuth(data){
  if(data.accessToken.length > 0 && data.accessTokenSecret.length > 0){
    return true
  } else {
    return false
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
