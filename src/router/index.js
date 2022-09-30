import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '',
    // name: 'DefaultLayout',
    component: () => import('../layouts/DefaultLayout'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('../views/HomeView')
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: () => import('../views/AboutView')
      }
    ]
  },
  {
    path: '',
    // name: 'DefaultLayout',
    component: () => import('../layouts/BlankLayout'),
    children: [
      {
        path: '/login',
        name: 'LoginPage',
        component: () => import('../views/auth/Login')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
