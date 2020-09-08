import { shallowMount } from '@vue/test-utils';
import UserRegister from '@/components/UserRegister.vue';
import flushPromises from 'flush-promises';

let url = '';
let data = '';
const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
    });
  },
};
describe('User가 등록 되어야 한다', () => {
  it('button 동작 확인', async () => {
    const wrapper = shallowMount(UserRegister, {
      mocks: {
        $http: mockHttp,
      },
    });

    const email = 'test@gmail.com';
    const nickname = 'test';
    const password = '12345';
    const favoriteLanguage = 'python';

    wrapper.find('[data-user-email]').setValue(email);
    wrapper.find('[data-user-nickname]').setValue(nickname);
    wrapper.find('[data-user-password]').setValue(password);
    wrapper.find('[data-user-favoriteLanguage]').setValue(favoriteLanguage);
    wrapper.find('.user-register__click').trigger('click');

    await flushPromises();
    expect(url).toBe('/api/v1/register');
    expect(data).toEqual({
      data: {
        email: email,
        nickname: nickname,
        password: password,
        favoriteLanguage: favoriteLanguage,
      },
    });
  });
});
