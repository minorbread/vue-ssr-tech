import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
/* webpackChunk: 'login-view' */
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // component: () => import('../views/todo/todo.vue'),
    // component: () => import('../views/login/login.vue'),
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'app'
    }
  },
  {
    path: '/login',
    component: Login
    // component: () => import('../views/login/login.vue')
  }
]
