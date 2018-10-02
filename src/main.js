import Vue from 'vue'
import AppReddit from './App-reddit.vue'

import './styles/normalize.css'

Vue.config.productionTip = true

new Vue({
  render: h => h(AppReddit)
}).$mount('#app')
