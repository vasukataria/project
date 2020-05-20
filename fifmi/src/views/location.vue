<template>
<div>
 <!-- Page Inner -->
        <section class="innersec">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="toptitle text-center">
                            <h2>Global Location</h2>
                            <nav>
                                <ol class="breadcrumb bg-transparent p-0 justify-content-center font-weight-bold">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Global Location</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Page Inner -->

        <!-- Location -->
        <section class="locationmap py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="locaton-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30370.132662389762!2d30.983375800105165!3d-17.919715932828087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a2323bf6f4e1%3A0x62218f4f6d7f532b!2sWaterfalls%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sin!4v1583227629394!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Location -->

        <!-- Location Detail -->
        <section class="locationdetail py-5">
            <div class="container">
                <div class="row">
                    <div class="input-group mb-4 col-md-4 ml-auto">
                        <input type="text" class="form-control" placeholder="Search">
                        <div class="input-group-append">
                            <span class="input-group-text bg-primary text-white brd-primary"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div class="table-responsive">
                            <table class="table mb-0 table-bordered locationtable text-center">
                                <thead class="thead-primary">
                                    <tr>
                                        <th>Location Name</th>
                                        <th>Street Address</th>
                                        <th>Region/ Locale</th>
                                        <th>City/ District</th>
                                        <th>Province/ State</th>
                                        <th>Postal/ ZIP Code</th>
                                        <th>Country</th>
                                        <th>Email</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                           <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                                        <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                                        <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                                        <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                                        <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                    <tr>
                                        <td>AMFCC Bible School</td>
                                        <td>2 Amalinda Road</td>
                                        <td>Glenview 7</td>
                                        <td>Harare</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Zimbabwe</td>
                                        <td>-</td>
                                        <td><router-link to="locationdetail">-</router-link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Location Detail -->



</div>
</template>
