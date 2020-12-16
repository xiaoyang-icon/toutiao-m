import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }, {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    childern: [
      {
        path: '', // 首页
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa', // 问答
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video', // 视频
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my', // 我的
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
