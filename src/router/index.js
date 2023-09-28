import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../pages/mainpage.vue'

import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import page4 from '../components/page4.vue'
import page5 from '../components/page5.vue'
import page6 from '../components/page6.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3
  },
  {
    path: '/page4',
    name: 'page4',
    component: page4
  },
  {
    path: '/page5',
    name: 'page5',
    component: page5
  },
  {
    path: '/page6',
    name: 'page6',
    component: page6
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router