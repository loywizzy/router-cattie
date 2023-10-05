import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../pages/mainpage.vue'
import cart from '../components/cart.vue'

import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import page4 from '../components/page4.vue'
import page5 from '../components/page5.vue'
import page6 from '../components/page6.vue'
import page7 from '../components/page7.vue'
import page8 from '../components/page8.vue'
import page9 from '../components/page9.vue'
import page10 from '../components/page10.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/storecats/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/storecats/page2',
    name: 'page2',
    component: page2
  },
  {
    path: '/storecats/page3',
    name: 'page3',
    component: page3
  },
  {
    path: '/storecats/page4',
    name: 'page4',
    component: page4
  },
  {
    path: '/storecats/page5',
    name: 'page5',
    component: page5
  },
  {
    path: '/storecats/page6',
    name: 'page6',
    component: page6
  },
  {
    path: '/storecats/page7',
    name: 'page7',
    component: page7
  },
  {
    path: '/storecats/page8',
    name: 'page8',
    component: page8
  },
  {
    path: '/storecats/page9',
    name: 'page9',
    component: page9
  },
  {
    path: '/storecats/page10',
    name: 'page10',
    component: page10
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router