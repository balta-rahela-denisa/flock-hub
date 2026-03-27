import { createRouter, createWebHistory } from 'vue-router'
import StocuriView from '@/views/StocuriView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/stocuri',
      name: 'stocuri',
      component: StocuriView
    }
  ],
})

export default router
