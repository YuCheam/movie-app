import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h=> h(App),
  router
})
