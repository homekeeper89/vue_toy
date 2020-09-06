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
});
