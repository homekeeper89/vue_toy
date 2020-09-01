import { shallowMount } from '@vue/test-utils';
import UserRegister from '@/components/UserRegister.vue';

describe('User가 등록 되어야 한다', () => {
  it('user 등록', () => {
    const wrapper = shallowMount(UserRegister);
    const email = 'test@gmail.com';
    const nickname = 'test';
    const password = '12345';
    const favoriteLanguage = 'python';
    wrapper.find('[data-user-email]').setValue(email);
    wrapper.find('[data-user-nickname]').setValue(nickname);
    wrapper.find('[data-user-password]').setValue(password);
    wrapper.find('[data-user-favoriteLanguage]').setValue(favoriteLanguage);
    wrapper.find('.user-register__click').trigger('click');
  });
});
