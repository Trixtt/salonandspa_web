import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import GalleryView from '../views/GalleryView.vue'
import ReservationView from '../views/ReservationView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/services', name: 'services', component: ServiceView },
    { path: '/gallery', name: 'gallery', component: GalleryView },
    { path: '/reservasi', name: 'reservation', component: ReservationView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
