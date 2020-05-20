<template>
<div>
 <!--End Header -->
        <!-- Page Inner -->
        <section class="innersec">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="toptitle text-center">
                            <h2>Events</h2>
                            <nav>
                                <ol class="breadcrumb bg-transparent p-0 justify-content-center font-weight-bold">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item active">Events</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Page Inner -->

        <!-- Article -->
        <section class="articlesec py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9 mb-5 mb-lg-0">
                        <div class="calendar-full">
                            <div class="row mb-5">
                                <div class="col-12 col-md-7">
                                    <div id="pnlSimpleCalendar"></div>
                                </div>
                                <div class="col-12 col-md-5">
                                    <div class="calendarright shrink-effect gradient-bt">
                                        <img src="../assets/images/news2.jpg" class="img-fluid w-100" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="event-block d-flex flex-wrap" v-for="(obj,key) in ServiceJSON" :key="key">
                            <div class="eventimg shrink-effect gradient-bt">
                                <img v-bind:src="obj.img" class="img-fluid w-100" alt="" />
                            </div>
                            <div class="event-content align-self-center" >
                                <a href="#"><h5>{{obj.desc}}</h5></a>
                                <div class="mb-3">
                                    <div class="event-detail">
                                        <i class="fa fa-clock-o pr-1"></i> {{obj.time}}
                                    </div>
                                    <div class="event-address">
                                        <i class="fa fa-map-marker pr-1"></i> {{obj.title}}
                                    </div>
                                </div>
                                <a href="#" class="btn btn-outline-primary rounded-50">Join Us</a>
                                <div class="event-date bg-primary text-white float-right text-center p-2">
                                    <h2 class="text-white mb-0">23</h2>
                                    <span>March 2020</span>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <ul class="pagination mb-0 justify-content-center">
                                <li class="page-item"><router-link class="page-link" to="#">Previous</router-link></li>
                                <li class="page-item active"><router-link class="page-link" to="#">1</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">2</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">3</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">Next</router-link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="right-title">
                            <h5>Ezekiel Tv</h5>
                            <a href="#" class="right-newsimg"><img src="../assets/images/news.jpg" alt="" class="img-fluid" /></a>
                        </div>
                        <hr>
                        <div class="eventdiv">
                            <a href="#"><img src="../assets/images/event.jpg" alt="" class="img-fluid" /></a>
                        </div>
                        <hr>
                        <div class="right-title">
                            <h5>Account Login</h5>
                            <form class="login-form">
                                <div class="form-group position-relative">
                                    <input type="email" name="email" placeholder="Email" class="form-control pr-4" />
                                    <span class="formicon"><i class="fa fa-user"></i></span>
                                </div>
                                <div class="form-group position-relative">
                                    <input type="password" name="password" placeholder="Password" class="form-control pr-4" />
                                    <span class="formicon"><i class="fa fa-lock"></i></span>
                                </div>
                                <div class="form-group-btn">
                                    <input type="submit" value="Login" class="btn btn-primary text-uppercase btn-block rounded-0 mb-1" />
                                </div>
                            </form>
                            <div class="text-dark text-center">
                                Create an account <a href="#"><u>Register</u></a>
                            </div>
                        </div>
                        <hr>
                        <div class="right-title">
                            <h5>Recent Comments</h5>
                            <ul class="list-unstyled mb-0 comment-list">
                                <li>
                                    <a href="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Article -->


</div>
</template>
<script>
import $ from 'jquery'
//import calendar from './assets/js/jquery.calendar.js'
export default {
  name: '',
  abc(){
 return {
 calendar: "",
 }
},
 mounted() {
 $(function () {
                $('#pnlSimpleCalendar').calendar();
            });
 
},
data:() =>({
    ServiceJSON: [
    {
        img:  require('@/assets/images/news1.jpg'),
        time: "Monday 9: 00 am to 1:00 pm",
        title: "Po Box 16222  Victoria Australia",
        desc: "Sharing Our Faith & Love..."
    },
    ]
    })
}

</script>