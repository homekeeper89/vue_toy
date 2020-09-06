// 1. 정확한 뮤테이션을 커밋 했는가
// 2. 페이로드가 정확했는가
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import ComponentWithButtons from '@/components/ComponentWithButtons.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn(),
};

const store = new Vuex.Store({ mutations });

describe('ComponentWithButtons', () => {
  it('버튼을 클릭했을때 뮤테이션을 커밋', async () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store,
      localVue,
    });

    wrapper.find('.commit').trigger('click');
    await wrapper.vm.$nextTick();

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'Test Commit' }
    );
  });

  it('mock 버튼 클릭', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore,
      },
    });

    wrapper.find('.dispatch').trigger('click');
    await wrapper.vm.$nextTick();

    expect(mockStore.dispatch).toHaveBeenCalledWith('testAction', {
      msg: 'Test Dispatch',
    });
  });

  it('namedspaced ', async () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();
    const wrapper = shallowMount(ComponentWithButtons, {
      store,
      localVue,
    });

    wrapper.find('.namespaced-dispatch').trigger('click');
    await wrapper.vm.$nextTick();

    expect(
      store.dispatch
    ).toHaveBeenCalledWith('namespaced/very/deeply/testAction', {
      msg: 'Test Namespaced Dispatch',
    });
  });
});
