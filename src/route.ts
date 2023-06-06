import { createWebHistory , createRouter} from "vue-router";
export const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/css',
    meta: {
      name: 'css',
      showIndex: true
    },
    component: () => import('@/views/css/Index.vue')
  },
  {
    path: '/css-detail/:compName',
    component: () => import('@/views/css/detail.vue')
  },
  {
    path: '/lottery',
    component: () => import('@/views/Lottery.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router