<template>
        <div class="">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 py-5">
                    <div class="foot-logo mb-4">
                        <router-link to="#"><img src="../assets/images/logo-white.png" alt="" class="img-fluid" /></router-link>
                    </div>
                    <ul class="list-inline footmenu">
                        <li class="list-inline-item"><router-link to="/" class="text-white">Home</router-link></li>
                        <li class="list-inline-item"><router-link to="About" class="text-white">About Us</router-link></li>
                        <li class="list-inline-item"><router-link to="#" class="text-white">Global Location</router-link></li>
                        <li class="list-inline-item"><router-link to="#" class="text-white">Webmail Login</router-link></li>
                        <li class="list-inline-item"><router-link to="contact" class="text-white">Contact Us</router-link></li>
                        <li class="list-inline-item"><router-link to="#" class="text-white">Ministries</router-link></li>
                        <li class="list-inline-item"><router-link to="#" class="text-white">Login</router-link></li>
                    </ul>
                    <ul class="list-inline footaddress mb-0">
                        <li class="list-inline-item">
                            <i class="icofont-google-map"></i>
                            <span>National HQ. 31 ScottSt, Liverpool, 2170, NSW</span>
                        </li>
                        <li class="list-inline-item">
                            <i class="icofont-phone"></i>
                            <span><router-link to="tel:+61 4 3222 2972" class="text-white">+61 4 3222 2972</router-link> , <a href="tel:+61 2 9602 1600" class="text-white">+61 2 9602 1600</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-botoom">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <span class="copyright">© 2020 Forward In Faith International Ministries Australia, All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import GreenAudioPlayer from '../assets/js/green-audio-player.js'
import Swiper from '../assets/js/swiper.min.js'
export default {
  name: '',
  data(){
 return {
   swiper: "",
   marquee: "",
 }
},
 mounted() {
      document.addEventListener('DOMContentLoaded', function() {
                new GreenAudioPlayer('.ready-player-1');
            });
            //Top Slider
            this.swiper = new Swiper('#marquee', {
              effect: 'fade',
              autoplay: {
                delay: 1500,
                disableOnInteraction: false,
              },
            });
 
}
}
</script>


<style>

</style>