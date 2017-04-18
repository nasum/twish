import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from './components/Welcome';
import AppRoot from './components/AppRoot';

document.title = __('title');

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Welcome },
  { path: '/app', component: AppRoot }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
