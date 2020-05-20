<template>
<div class="">
<section class="innersec">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="toptitle text-center">
                            <h2>About Us</h2>
                            <nav>
                                <ol class="breadcrumb bg-transparent p-0 justify-content-center font-weight-bold">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item active">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Page Inner -->

        <!-- About -->
        <section class="aboutsec py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-5 mb-4 mb-md-0">
                        <div class="aboutimg">
                            <img src="../assets/images/aboutimg.jpg" class="img-fluid rounded" alt="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="heading">
                            <h2>Welcome Forward In Faith Ministries </h2>
                            <hr class="brd-primary ml-0">
                        </div>
                        <p class="text-justify">Forward in Faith Ministries International was birthed through a divine calling, when God called a young man living in the remote area of Ngaone in Chipinge, Zimbabwe. Ezekiel Handinawangu Guti was compelled to seek the creator, and although not having access to a preacher or a bible, Ezekiel had experience and encounter with God in which after many days of crying "Creator, if you are there, save my soul," the Lord responded audibly saying "Fear Not, Sin Not." As God revealed Himself to Ezekiel Guti, little did anyone imagine that it would result in a ministry that has now reached over 100 nations and states worldwide. FIFMI (also known as ZAOGA in Zimbabwe), is one of the most powerful movements in post-biblical Christianity,changing millions of lives through the vision given by God to founder Archbishop Dr. Ezekiel H. Guti.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End About -->

        <!-- Choose -->
        <section class="choosesec bg-cover" :style="{'background-image': 'url(' + require('../assets/images/bg1.jpg') + ')'}">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 mb-4">
                        <div class="heading text-center">
                            <h2 class="text-white">Why Choose Us</h2>
                            <hr class="brd-white">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3" v-for="(obj,key) in ServiceJSON" :key="key">
                        <div class="choose-block text-center rounded">
                            <div class="choose-image">
                                <img v-bind:src="obj.img" class="img-fluid" alt="">
                            </div>
                            <div class="choose-content">
                                <h6><span data-hover="Archbishop Dr. EH Guti">{{obj.title}}</span></h6>
                                <p class="mb-0">{{obj.desc}}</p>
                                <a href="#"><u>Read More <i class="icofont icofont-double-right"></i></u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
</template>


<script>
export default{
data:() =>({
    ServiceJSON: [
    {
        img: require("../assets/images/img1.jpg"),
        title:"Archbishop Dr. EH Guti",
        desc:"Archbishop Dr. Ezekiel H. Guti is the founder of Forward in Faith Ministries International."
    },
    {
        img: require("../assets/images/img2.jpg"),
        title:"Archbishop Dr. EH Guti",
        desc:"Archbishop Dr. Ezekiel H. Guti is the founder of Forward in Faith Ministries International."
    },
    {
        img: require("../assets/images/img3.jpg"),
        title:"Archbishop Dr. EH Guti",
        desc:"Archbishop Dr. Ezekiel H. Guti is the founder of Forward in Faith Ministries International."
    },
    {
        img: require("../assets/images/img4.jpg"),
        title:"Archbishop Dr. EH Guti",
        desc:"Archbishop Dr. Ezekiel H. Guti is the founder of Forward in Faith Ministries International."
    },
    ]
    })
}

</script>