import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { mount, createLocalVue } from '@vue/test-utils';

import Posts from '@/components/Posts.vue';
import { createRouter } from '@/router/index.js';
import { createStore } from '@/store/index.js';

describe('Posts.vue', () => {
  it('통과하면 메세지를 렌더한다', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);

    const store = createStore();
    const router = createRouter();
    const message = 'New Content coming soon';
    const wrapper = mount(Posts, {
      propsData: { message },
      store,
      router,
    });

    expect(wrapper.find('#message').text()).toBe(message);
  });

  it('posts를 렌더한다', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);

    const store = createStore();
    const router = createRouter();

    const message = 'New Content coming soon';
    const wrapper = mount(Posts, {
      propsData: { message },
      store,
      router,
    });

    wrapper.vm.$store.commit('ADD_POSTS', [{ id: 1, title: 'Post' }]);
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('.post').length).toBe(1);
  });
});
