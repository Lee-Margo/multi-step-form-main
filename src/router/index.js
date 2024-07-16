import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import("../views/Home.vue")
    },
    {
      name: 'select-plan',
      path: '/select-plan',
      component: () => import("../views/SelectPlan.vue")
    },
    {
      name: 'add-ons',
      path: '/add-ons',
      component: () => import("../views/AddOns.vue")
    },
    {
      name: 'finish',
      path: '/finish',
      component: () => import("../views/Finish.vue")
    },
    {
      name: 'thanks',
      path: '/thanks',
      component: () => import("../views/Thanks.vue")
    },
  ]
})


export default router