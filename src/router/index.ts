import { createRouter, createWebHistory } from 'vue-router'

export const menus=[
  {
    path: 'flex',
    name: 'flex',
    component: ()=>import('@/views/flex.vue'),
    meta:{
      title:'flex布局'
    }
  },
  {
    path: 'grid',
    name: 'grid',
    meta:{
      title:'grid布局'
    },
    component: ()=>import('@/views/grid.vue'),
  },
  {
    path: 'fanshu',
    name: 'fanshu',
    meta:{
      title:'动画翻书效果'
    },
    component: ()=>import('@/views/fanshu.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'root',
      redirect:menus[0].path,
      children:menus
    }
  ]
})

export default router
