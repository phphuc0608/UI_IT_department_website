import { createRouter, createWebHistory } from 'vue-router';
import TrangChuView from '../views/TrangChuView.vue';
import GioiThieuView from '../views/GioiThieuView.vue';
import BlogView from '../views/BlogView.vue';
import LienHeView from '../views/LienHeView.vue';
const routes = [
  {
    path: '/',
    name: 'trang_chu',
    component: TrangChuView
  },
  {
    path: '/gioi_thieu',
    name: 'gioi_thieu',
    // component: () => import('../views/GioiThieuView.vue')
    component: GioiThieuView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/lien_he',
    name: 'lien_he',
    component: LienHeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
