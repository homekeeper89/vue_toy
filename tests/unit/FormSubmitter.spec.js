import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';
import flushPromises from 'flush-promises'; // 모든 프로미스를 즉시 resolve 하는 것

let url = '';
let data = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
      // reject(); 에러 발생하고 싶을때
    });
  },
};
describe('FormSubmitter', () => {
  it('제줄했을때 알림 나타남', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    });

    wrapper.find('[data-username]').setValue('alice');
    wrapper.find('form').trigger('submit.prevent');

    await flushPromises(); // $nextTick() 한 것과 같음.

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.'
    );
    expect(url).toBe('/api/v1/register');
    expect(data).toEqual({ username: 'alice' });
  });
});
