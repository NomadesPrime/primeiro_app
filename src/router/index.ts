import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Foto.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/MapsPage.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/CafePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
