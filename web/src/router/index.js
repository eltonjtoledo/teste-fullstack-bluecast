import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clients',
    name: 'Client',
    component: function () {
      return import('@/views/ClientsView')
    },
  },
  {
    path: '/debits',
    name: 'listDebits',
    component: function () {
      return import('@/views/DebitsView')
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
