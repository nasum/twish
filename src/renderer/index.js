import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueShortKey from 'vue-shortkey';
import storage from 'electron-json-storage';

import Welcome from './components/Welcome';
import AppRoot from './components/AppRoot';

import actions from './actions';

import Tweet             from './modules/Tweet';
import TweetDialog       from './modules/TweetDialog';
import RetweetDialog     from './modules/RetweetDialog';
import MediaDialog       from './modules/MediaDialog';
import UserDialog        from './modules/UserDialog';
import TweetStatusDialog from './modules/TweetStatusDialog';

document.title = __('title');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueShortKey);

const routes = [
  { path: '/', component: Welcome },
  { path: '/app', component: AppRoot }
];

const store = new Vuex.Store({
  actions,
  modules: {
    Tweet: Tweet,
    TweetDialog: TweetDialog,
    RetweetDialog: RetweetDialog,
    MediaDialog: MediaDialog,
    UserDialog: UserDialog,
    TweetStatusDialog: TweetStatusDialog
  }
});

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store
}).$mount('#app');

let timer;

window.addEventListener('resize', function (event) {
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    storage.set('appOptions', {
      x: window.screenX,
      y: window.screenY,
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, 1000);
});
