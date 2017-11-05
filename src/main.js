'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
var router = new VueRouter(routerConfig);

var app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});
