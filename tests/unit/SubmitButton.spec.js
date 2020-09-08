import { shallowMount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

const factory = (propsData) => {
  return shallowMount(SubmitButton, {
    propsData: {
      ...propsData,
    },
  });
};

describe('SubmitButton.vue', () => {
  it('인증 되지 않은 메세지를 표시한다', () => {
    const wrapper = factory({ msg: 'submit' });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Not Authorized');
    expect(wrapper.find('button').text()).toBe('submit');
  });

  it('관리자 권한 메세지를 표시한다', () => {
    const msg = 'submit';
    const isAdmin = true;
    const wrapper = factory({ isAdmin: true, msg: 'submit' });

    expect(wrapper.find('span').text()).toBe('Admin Privileges');
    expect(wrapper.find('button').text()).toBe('submit');
  });
});
