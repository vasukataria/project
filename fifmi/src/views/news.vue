<template>
<div>
  <!-- News -->
        <section class="newssec py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9 mb-5 mb-lg-0">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="(obj,key) in ServiceJSON" :key="key">
                                <div class="news-block text-center position-relative">
                                    <div class="news-image shrink-effect position-relative gradient-bt">
                                        <img v-bind:src="obj.img" alt="" class="img-fluid" />
                                        <div class="news-author text-white bg-primary text-white">
                                            <span><i class="fa fa-user-o"></i> by drlaverne</span>
                                            <span><i class="fa fa-calendar"></i> July 9 2018</span>
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <h5>{{obj.title}}</h5>
                                        <p>{{obj.desc}}</p>
                                        <router-link to="singledetail" class="btn btn-primary">Read More</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="right-title">
                            <h5>Ezekiel Tv</h5>
                            <router-link to="#" class="right-newsimg"><img src="../assets/images/news.jpg" alt="" class="img-fluid" /></router-link>
                        </div>
                        <hr>
                        <div class="eventdiv">
                            <router-link to="#"><img src="../assets/images/event.jpg" alt="" class="img-fluid" /></router-link>
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
                                Create an account <router-link to="#"><u>Register</u></router-link>
                            </div>
                        </div>
                        <hr>
                        <div class="right-title">
                            <h5>Recent Comments</h5>
                            <ul class="list-unstyled mb-0 comment-list">
                                <li>
                                    <router-link to="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#" class="text-light">
                                        <div class="commentimg shrink-effect float-left mr-3">
                                            <img src="../assets/images/comment.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="comment-txt">
                                            <h6 class="mb-1">Glory be to the Almighty God</h6>
                                            <span><i class="fa fa-calendar"></i> 2 years 45 weeks ago</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End News -->
</div>
</template>

<script>
export default{
data:() =>({
    ServiceJSON: [
    {
        img:  require('../assets/images/news1.jpg'),
        title: "Apostles Update",
        desc: "Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    {
        img: require('../assets/images/news1.jpg'),
        title:"Apostles Update",
        desc:"Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    {
        img: require('../assets/images/news1.jpg'),
        title:"Apostles Update",
        desc:"Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    {
        img: require('../assets/images/news1.jpg'),
        title:"Apostles Update",
        desc:"Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    {
        img: require('../assets/images/news1.jpg'),
        title:"Apostles Update",
        desc:"Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    {
        img: require('../assets/images/news1.jpg'),
        title:"Apostles Update",
        desc:"Dear Friends Bindura Night of Miracles3000 people thronged the cathedral and rays..."
    },
    ]
    })


}
</script>