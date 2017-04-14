require('../css/photon.css');

import { ipcRenderer } from 'electron';
import Vue from 'vue';
import AppRoot from './components/AppRoot';

document.title = __('title');

ipcRenderer.send('AUTH', '');

new Vue({
  el: '#app',
  components: {
    AppRoot: AppRoot
  },
  created () {
    document.getElementsByClassName('title')[0].innerText = __('title');
  }
});
