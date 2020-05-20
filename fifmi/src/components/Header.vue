<template>
    <div class="">
            <div class="top-bar bg-primary py-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-7">
                            <ul class="list-inline mb-0 toplink text-center text-md-left">
                                <li class="list-inline-item">
                                   <router-link to="contact" class="text-white">Contact us</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#" class="text-white">Webmail</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#" class="text-white">Login</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#" class="text-white">Sign In</router-link>
                                </li>
                                <li class="list-inline-item">
                                   <router-link to="#" class="text-white">FAQ</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-5">
                            <ul class="list-inline mb-0 topsocial text-center text-md-right">
                                <li class="list-inline-item">
                                    <router-link to="#" class="text-white"><i class="icofont icofont-facebook"></i></router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#" class="text-white"><i class="icofont icofont-twitter"></i></router-link>
                                </li>
                                <li class="list-inline-item">
                                   <router-link to="#" class="text-white"><i class="icofont icofont-google-plus"></i></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="headermiddle">
                <div class="container">
                    <div class="row align-items-center py-3">
                        <div class="col-12 col-md-4">
                            <router-link to="/" class="site-logo"><img src="../assets/images/logo-dark.png" alt="" class="img-fluid"></router-link>
                            <button class="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                <span class="navbar-toggler-icon"></span>
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="col-12 col-md-5 d-none d-md-block">
                            <div id="marquee" class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <router-link to="#" class="text-light">
                                            <div class="head-author d-flex flex-wrap justify-content-center">
                                                <div class="author-image float-left mr-3">
                                                    <img src="../assets/images/author.png" alt="" class="img-fluid" />
                                                </div>
                                                <div class="author-txt align-self-center">
                                                    <span>
                                                        <b class="text-danger">Love The Lord Your God With All Your Heart</b> <br /> 
                                                        <b class="text-dark">Dr  R Mafuriranwa</b> <span>1 month ago.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="#" class="text-light">
                                            <div class="head-author d-flex flex-wrap justify-content-center">
                                                <div class="author-image float-left mr-3">
                                                    <img src="../assets/images/img2.jpg" alt="" class="img-fluid" />
                                                </div>
                                                <div class="author-txt align-self-center">
                                                    <span>
                                                        <b class="text-danger">Founder & President</b> <br /> 
                                                        <b class="text-dark">Dr  R Mafuriranwa</b> <span>3 month ago.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 d-none d-md-block">
                            <div class="ready-player-1">
                                <audio>
                                    <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mpeg">
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menubar bg-primary">
                <div class="container px-0">
                    <nav class="navbar navbar-expand-md p-0">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <router-link class="nav-link" to="/"><i class="icofont icofont-home"></i></router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <router-link class="nav-link" to="About" data-toggle="dropdown">About Us</router-link>
                                    <div class="dropdown-menu rounded-0 border-0 m-0">
                                        <router-link class="dropdown-item" to="#">Our Founders</router-link>
                                        <router-link class="dropdown-item" to="#">Our History</router-link>
                                       <router-link class="dropdown-item" to="#">Statement Of Faith</router-link>
                                        <router-link class="dropdown-item" to="#">Our Beliefs</router-link>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <router-link class="nav-link" to="#" data-toggle="dropdown">Ministries</router-link>
                                    <div class="dropdown-menu rounded-0 border-0 m-0">
                                        <router-link class="dropdown-item" to="#">Men Of Integrity Youth</router-link>
                                        <router-link class="dropdown-item" to="#">Praise and Worship</router-link>
                                        <router-link class="dropdown-item" to="#">Ladies Ministry</router-link>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="news">News</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="bibleschool">Bible School</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="media">Media</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="#">Community Store</router-link>
                                </li>
                                <li class="nav-item">
                                   <router-link class="nav-link" to="#">FAQ</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="location">Location</router-link>
                                </li>
                                <li class="nav-item">
                                   <router-link class="nav-link" to="events">Event/Prayers</router-link>
                                </li>
                                <li class="nav-item">
                                   <router-link class="nav-link" to="contact">Contact Us</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</template>

<script>
export default {
}
</script>


<style>

</style>