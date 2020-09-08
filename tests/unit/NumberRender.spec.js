import { shallowMount } from '@vue/test-utils';
import NumberRenderer from '@/components/NumberRenderer.vue';

describe('숫자가 홀,짝에 따라서 다르게 render', () => {
  it('짝수를 렌더한다', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });

    expect(wrapper.text()).toBe('2,4,6,8');
  });

  it('홀수를 렌더한다', () => {
    // call은 computed를 테스트 하는데 유용하다.
    const localThis = { even: false };
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1,3,5,7,9');
  });
});
