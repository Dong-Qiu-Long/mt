import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultPage from '@/views/default.vue';
import blankPage from '@/views/blank.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
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
