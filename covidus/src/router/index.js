import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CovidUs from '../views/CovidUs.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
