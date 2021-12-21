import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basket')
  },{
    path: '/good',
    name: 'Good',
    component: () => import(/* webpackChunkName: "about" */ '../views/Good')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
