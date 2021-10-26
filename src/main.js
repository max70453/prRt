import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import ProgressBar from 'vuejs-progress-bar'
import VTooltip from 'v-tooltip'
import vuescroll from 'vuescroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import './fonts/index.sass'

var VueScrollTo = require('vue-scrollto')
Vue.use(VueAxios, axios);
Vue.use(ProgressBar)
Vue.use(vuescroll)
Vue.use(VTooltip)
Vue.use(VueScrollTo, {container: "body", duration: 500, easing: "ease", offset: 0, force: true, cancelable: true, onStart: false, onDone: false, onCancel: false, x: false, y: true})
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
