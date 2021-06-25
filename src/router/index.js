import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AppSwiper from '../components/AppSwiper.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
 
  {
    path: '/post/:id',
    name: 'Post',
    component: AppSwiper,
  
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
