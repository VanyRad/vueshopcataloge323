import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {path: '/home', name: 'home', component: HomeView},
  {path:'/cart',name: 'CartView', component: CartView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
