import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import artical from '../views/artical.vue'
import About from '../views/About.vue'
import bibleschool from '../views/bibleschool.vue'
import contact from '../views/contact.vue'
import events from '../views/events.vue'
import location from '../views/location.vue'
import locationdetail from '../views/locationdetail.vue'
import media from '../views/media.vue'
import news from '../views/news.vue'
import singledetail from '../views/singledetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artical',
    name: 'artical',
    component: artical

    
  },
  {
    path: '/About',
    name: 'About',
    component: About
    
  },
  {
    path: '/bibleschool',
    name: 'bibleschool',
    component: bibleschool
    
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
    
  },
  {
    path: '/events',
    name: 'events',
    component: events
    
  },
  {
    path: '/location',
    name: 'location',
    component: location
    
  },
  {
    path: '/locationdetail',
    name: 'locationdetail',
    component: locationdetail
    
  },
  {
    path: '/media',
    name: 'media',
    component: media
    
  },
  {
    path: '/news',
    name: 'news',
    component: news
    
  },
  {
    path: '/singledetail',
    name: 'singledetail',
    component: singledetail
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
  return{X:0,y:0}
  }
})

export default router
