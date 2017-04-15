import Vue from 'vue';
import AppRoot from './components/AppRoot';

document.title = __('title');

new Vue({
  el: '#app',
  components: {
    AppRoot: AppRoot
  },
  mounted () {
    document.getElementsByClassName('title')[0].innerText = __('title');
  }
});
