import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueResource from "vue-resource"
import store from './store/store.js'
import router from './routes/index.js'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueResource)

new Vue({
  el: '#app',
  store: store,
  router: Router,
  components: {
    'app':App}
})
