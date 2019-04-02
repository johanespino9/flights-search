import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

window.axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
