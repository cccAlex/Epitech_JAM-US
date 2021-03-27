import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CovidUs from '../views/CovidUs.vue'
import Donate from '../views/Donate.vue'
import Receive from '../views/Receive.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/covidus',
    name: 'CovidUs',
    component: CovidUs
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/receive',
    name: 'Receive',
    component: Receive
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
