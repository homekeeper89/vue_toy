import { shallowMount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

describe('SubmitButton.vue', () => {
  it('인증 되지 않은 메세지를 표시한다', () => {
    const msg = 'submit';
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg: msg,
      },
    });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Not Authorized');
    expect(wrapper.find('button').text()).toBe('submit');
  });

  it('관리자 권한 메세지를 표시한다', () => {
    const msg = 'submit';
    const isAdmin = true;
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg: msg,
        isAdmin: isAdmin,
      },
    });

    expect(wrapper.find('span').text()).toBe('Admin Privileges');
    expect(wrapper.find('button').text()).toBe('submit');
  });
});
