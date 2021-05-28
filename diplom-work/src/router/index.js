import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthAdmin from '../views/authAdmin.vue'
import AdminPanel from '../views/adminPanel.vue'
import SingleNewsPage from '../views/SingleNewsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AuthAdmin',
    name: 'AuthAdmin',
    component: AuthAdmin
  },
  {
    path: '/AdminPanel',
    name: 'AdminPanel',
    component: AdminPanel
  },
  {
    path: '/NewsPage/:id',
    name: 'SingleNewsPage',
    component: SingleNewsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
