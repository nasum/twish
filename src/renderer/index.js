import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Welcome from './components/Welcome';
import AppRoot from './components/AppRoot';

import actions from './actions';
import modules from './modules';

document.title = __('title');

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: Welcome },
  { path: '/app', component: AppRoot }
];
console.log(actions);
const store = new Vuex.Store({
  actions,
  modules
});

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store
}).$mount('#app');
