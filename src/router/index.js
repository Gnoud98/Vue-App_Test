import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
   component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
   {
    path: '/todo',
    name: 'todo',
    component: () => import('../components/todos.vue')
  },
   {
    path: '/login',
    name: 'login',
    component: () => import('../views/login-form.vue')
  },
   {
    path: '/register',
    name: 'register',
    component: () => import('../views/reg-form.vue')
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../views/SwiperSlider.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
