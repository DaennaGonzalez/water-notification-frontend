import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'

import daybookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
  {
    path: '/',
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
