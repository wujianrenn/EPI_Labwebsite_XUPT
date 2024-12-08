import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/recruitment',
    component: () => import('@/views/Recruitment.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/research',
    component: () => import('@/views/Research.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
