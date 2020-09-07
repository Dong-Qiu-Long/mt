import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultPage from '@/views/default.vue';
import blankPage from '@/views/blank.vue';
import mainBar from '@/components/main/index.vue';
// import chageCity from '@/page/changeCity.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'defaultPage',
    component: defaultPage,
    children: [
      {
        path: '/index',
        name: 'index',
        component: mainBar,
      },
      {
        path: '/chageCity',
        name: 'chageCity',
        component: () => import('@/page/changeCity.vue'),
      },
    ],
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
