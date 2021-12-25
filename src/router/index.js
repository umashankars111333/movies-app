import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import Profile from '../views/Profile.vue'
import App from '../App.vue'
import AboutUs from '../components/AboutUs.vue'
import Category from '../components/Category.vue'
import ContactUs from '../components/ContactUs.vue'
import Newsroom from '../components/Newsroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/dashboard/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/dashboard/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/dashboard/newsroom',
    name: 'Newsroom',
    component: Newsroom
  },
  {
    path: '/dashboard/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
]

const router = new VueRouter({
  routes
})

export default router
