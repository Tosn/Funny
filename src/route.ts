import { createWebHistory , createRouter} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index.vue')
    }
  ]
})

export default router