import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    label: '首页',
    component: () => import('@/views/home/index.vue')
  },
//   # ---- 文章 (article)
// # ---- 案例 (project)
// # ---- 留言 (message board)
// # ---- 关于 (about)
  {
    path: '/article',
    name: 'article',
    label: '文章',
    component: () => import('@/views/article/index.vue')
  },
  {
    path: '/project',
    name: 'project',
    label: '案例',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/messageboard',
    name: 'messageboard',
    label: '首页',
    component: () => import('@/views/message-board/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    label: '关于',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    label: '管理员',
    component: () => import('@/views/admin/index.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
