import { shallowMount } from '@vue/test-utils';
import ParentWithManyChildren from '@/components/ParentWithManyChildren.vue';
import Child from '@/components/Child.vue';

describe('다수의 자식을 렌더한다', () => {
  it('다수 자식', () => {
    const wrapper = shallowMount(ParentWithManyChildren);
    expect(wrapper.findAll(Child).length).toBe(3);
  });
});
