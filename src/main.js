import Vue from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
// Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
