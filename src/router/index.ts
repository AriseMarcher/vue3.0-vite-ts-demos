import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home/home-index.vue'
const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: async () => await import('@/views/user/user-index.vue'),
    meta: {
      titles: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
