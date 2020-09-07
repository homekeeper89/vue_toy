import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
  });
};
