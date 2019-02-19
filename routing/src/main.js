import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
// default mode: hash than you see in url example.com/#/user

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')