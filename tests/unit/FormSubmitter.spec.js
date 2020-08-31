import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';

describe('FormSubmitter', () => {
  it('제줄했을때 알림 나타남', async () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find('[data-username]').setValue('alice');
    wrapper.find('form').trigger('submit.prevent');

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.'
    );
  });
});
