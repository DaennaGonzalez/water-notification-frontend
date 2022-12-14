import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import {auth} from '../api/firebase'
import commentsRouter from './comments'
import generalView from './generalView'
import graphsRouter from './graphs' 

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
    path: '/comentarios',
    ...commentsRouter
  },
  {
    path: '/',
    ...generalView
  },
  {
  path: '/grafica',
  ...graphsRouter
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
