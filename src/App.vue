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
import WOW from "./assets/lib/wow/wow.js"
//import superfish from "./assets/lib/superfish/superfish.js"
import $ from "jquery"


  export default {
  name: 'Home',
  props: {
    
  },
  data: () => ({
     //superfish   
    }),
  
  mounted(){
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
   new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      this.target = $(this.hash);
      if (this.target.length) {
        this.top_space = 0;

        if ($('#header').length) {
          this.top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            this.top_space = this.top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: this.target.offset().top - this.top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });
    // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    this.selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(this.selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  
  },
  }                                                                          
  </script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            