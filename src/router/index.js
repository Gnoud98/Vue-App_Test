import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/HomePage.vue')
  },
   
  {
    path: '/slider',
    name: 'Slider',
   component: () => import('../views/Slider.vue')
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
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
