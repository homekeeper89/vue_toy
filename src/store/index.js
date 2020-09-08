import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

// export const store = new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

const createStore = (initialState = {}) =>
  new Vuex.Store({
    state: {
      authenticated: false,
      posts: [],
      ...initialState,
    },
    mutations: {
      ADD_POSTS(state, posts) {
        state.posts = [...state.posts, ...posts];
      },
    },
  });

export { createStore };
