import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuex from '@/components/ComponentWithVuex.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'alice',
    firstName: 'Alice',
    lastName: 'Doe',
  },
  getters: {
    fullname: (state) => state.firstName + ' ' + state.lastName,
  },
});

describe('ComponentWithVuex', () => {
  it('실제 Vuex store 사용', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue,
    });
    expect(wrapper.find('.username').text()).toBe('alice');
  });

  it('mock Vues store 사용', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: { username: 'alice', firstName: 'Alice', lastName: 'Doe' },
          getters: {
            fullname: (state) => state.firstName + ' ' + state.lastName,
          },
        },
      },
    });
    expect(wrapper.find('.username').text()).toBe('alice');
  });
  it('getter 테스트', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue,
    });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });

  it('computed 테스트 하기', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: { username: 'll' },
        },
      },
      computed: {
        fullname: () => 'Alice Doe',
      },
    });
    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });
});
