import { shallowMount, mount } from '@vue/test-utils';
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue';
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue';

describe('ParentWithAPICallChild', () => {
  it('마운트로 렌더하고 API 호출을 초기화 한다', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true,
      },
    });

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
