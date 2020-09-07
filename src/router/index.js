import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import routes from './routes.js';
import { bustCache } from './bust-cache.js';

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   { path: '/nested-route', component: NestedRoute },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];

const router = new VueRouter({
  routes,
});

export function beforeEach(to, from, next) {
  if (to.matched.some((record) => record.meta.shouldBustCache)) {
    bustCache();
  }
  next();
}

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;
