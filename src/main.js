import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/style.css"
import "./assets/lib/font-awesome/css/font-awesome.css"
import "./assets/lib/font-awesome/css/font-awesome.min.css"
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/animate/animate.css"
import "./assets/lib/bootstrap/css/bootstrap.min.css"
import "./assets/lib/bootstrap/css/bootstrap.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
