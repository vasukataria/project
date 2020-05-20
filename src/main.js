import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/lib/bootstrap/css/bootstrap.css"
import "./assets/css/style.css"
import "./assets/lib/font-awesome/css/font-awesome.css"
import "./assets/lib/animate/animate.css"
import "bootstrap"
import "jquery"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
