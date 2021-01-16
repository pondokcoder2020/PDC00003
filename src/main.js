import 'core-js/stable'
import { config } from './config'

import Vue from 'vue'
import Vuetify from "vuetify"
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store/index.js'
import Axios from 'axios'



//this.appConfig.$api_url

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Vuetify)
Vue.prototype.appConfig = config
Vue.prototype.$http = Axios;
Vue.prototype.$log = console.log.bind(console)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
