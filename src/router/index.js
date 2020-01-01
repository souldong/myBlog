import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const admin = [
  {
    path: '/',
    name: 'home',
    redirect: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    label: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    label: 'Blog',
    component: () => import('@/views/blog/index.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    label: 'Archive',
    component: () => import('@/views/archive/index.vue')
  },
  {
    path: '/music',
    name: 'music',
    label: 'Music',
    component: () => import('@/views/music/index.vue')
  },
  {
    path: '/apps',
    name: 'apps',
    label: 'Apps',
    component: () => import('@/views/apps/index.vue'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes: admin
})

export default router
