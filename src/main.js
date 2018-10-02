import Vue from 'vue'
import AppReddit from './App-reddit.vue'
import VueTouch from 'vue-touch'

import './styles/normalize.css'

Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = true

new Vue({
  render: h => h(AppReddit)
}).$mount('#app')
