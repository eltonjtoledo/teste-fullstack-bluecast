import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ClientsView from '@/views/clients/ClientsView'
import AddClientView from '@/views/clients/AddClientView'
import DebitsView from '@/views/DebitsView'

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
    component: ClientsView
  },
  {
    path: '/clients/add',
    name: 'AddClientView',
    component: AddClientView
  },
  {
    path: '/clients/add/:id',
    name: 'EditClientView',
    component: AddClientView
  },
  {
    path: '/debits',
    name: 'listDebits',
    component: DebitsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
