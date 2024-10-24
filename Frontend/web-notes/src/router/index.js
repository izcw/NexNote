import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue';
// import indexView from '../views/indexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/indexView.vue')
    }
  ]
})

export default router
