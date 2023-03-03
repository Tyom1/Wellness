import { createRouter, createMemoryHistory } from 'vue-router'
import HomeWellness from '@/views/HomeWellness/HomeWellness'

const routes = [
  {
    path: '/',
    name: 'HomeWellness',
    components: {
      default: HomeWellness
    }
  }
]

const router = createRouter({
  mode: 'history',
  history: createMemoryHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
