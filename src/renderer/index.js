import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Welcome from './components/Welcome';
import AppRoot from './components/AppRoot';
import store from './store';

document.title = __('title');

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: Welcome },
  { path: '/app', component: AppRoot }
];

const router = new VueRouter({
  routes,
  store
});

new Vue({
  router,
  store
}).$mount('#app');
