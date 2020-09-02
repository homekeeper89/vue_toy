import { mount, shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

const factory = (component, data) => {
  return shallowMount(component, {
    data() {
      return data;
    },
  });
};

describe('Parent', () => {
  it('span 태그를 렌더하지 않는다', () => {
    const data = {
      showSpan: true,
    };
    const wrapper = factory(Parent, data);

    expect(wrapper.find('span').isVisible()).toBe(true);
  });
  it('child 태그를 찾는다', () => {
    const data = {
      showChild: true,
    };
    const wrapper = factory(Parent, data);

    expect(wrapper.find({ name: 'Child' }).exists()).toBe(true);
  });
});
