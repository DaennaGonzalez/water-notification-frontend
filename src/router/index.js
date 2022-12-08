import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import {auth} from '../api/firebase'
import daybookRouter from './daybook'
import generalView from './generalView'

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
  },
  {
    path: '/generalView',
    ...generalView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
  else if (!requiresAuth && currentUser) next('/')
  else if (!requiresAuth && !currentUser) next()
  else next()
})

export default router
