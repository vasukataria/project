import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.min.css';
import './assets/css/green-audio-player.css';
import './assets/css/icofont.css';
import './assets/css/jquery.calendar.css';
import './assets/css/swiper.min.css';
import './assets/css/main.css';
import 'jquery';
import 'bootstrap';
//import './assets/js/green-audio-player';
//import './assets/js/popper.min.js';




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
