import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hom3 from '../page/home/home.vue'
import GuestL from '../page/guest/guest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'home3',
      component: HomeView,
    },
    {
      path: '/guest_list',
      name: 'guest',
      component: GuestL,
    },
    {
      path: '/',
      name: 'home',
      component: Hom3,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
