import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import routes from './routes.js';

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

// export function beforeEach(to, from, next) {
//   if (to.matched.some((record) => record.meta.shouldBustCache)) {
//     bustCache();
//   }
//   next();
// }

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;

// export const createRouter = () => {
//   return new VueRouter({});
// };

const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [],
  });
};

export { createRouter };
