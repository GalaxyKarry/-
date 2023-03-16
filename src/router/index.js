import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView';
import RecordsView from '../views/RecordsView';
import NotFoundView from '../views/NotFoundView'
import LoginView from '../views/LoginView'
import ModifyHomeView from '../views/ModifyHomeView'
import ModifyHomeView2 from '../views/ModifyHomeView2'
// import ModifyHomeView from '../views/ModifyHomeView'
import test from '../views/test'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RecordsView
  },
  {
    path: '/RecordsView/',
    name: 'RecordsView',
    component: RecordsView
  },
  {
    path: '/LoginView/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/ModifyHomeView/',
    name: 'ModifyHomeView',
    component: ModifyHomeView
  },
  {
    path: '/ModifyHomeView2/',
    name: 'ModifyHomeView2',
    component: ModifyHomeView2
  },
  {
    path: '/test/',
    name: 'test',
    component: test
  },
  {
    path: '/UsersView/',
    name: 'UsersView',
    component: UsersView
  },
  {
    path: '/NotFoundView/',
    name: 'NotFoundView',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/NotFoundView/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
