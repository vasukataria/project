<template>
  <div id="app">
      <router-link to="/"></router-link>
      
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,700,700italic|Poppins:300,400,500,700');


html, body{
    font-family: 'Open Sans','Poppins',sans-serif;
}

#app {
    font-family: 'Open Sans','Poppins', sans-serif;
}
</style>
<script>
//import $ from "jquery"
//import jQuery from "jquery"
//import WOW from "./assets/lib/wow/wow.js"
//import e from './assets/lib/superfish/hoverIntent.js'


  export default {
  name: 'Home',
  props: {
  },
  data: () => ({
     //superfish
     $  
    }),
  mounted(){
    jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();


  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
 });
});
},
}                                                                        
  </script>