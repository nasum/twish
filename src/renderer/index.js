import Vue from 'vue';
import VueRouter from 'vue-router';
import AppRoot from './components/AppRoot';

document.title = __('title');

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AppRoot }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

document.getElementsByClassName('title')[0].innerText = __('title');
