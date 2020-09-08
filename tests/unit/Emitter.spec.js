import Emitter from '@/components/Emitter.vue';
import { shallowMount } from '@vue/test-utils';

describe('Emitter', () => {
  it('두개의 인자를 가진 이벤트를 방출한다', () => {
    const wrapper = shallowMount(Emitter);

    wrapper.vm.emitEvent();

    console.log(wrapper.emitted().myEvent);
    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password']);
  });

  it('컴포넌트 마운트 하지 않고 이벤트 방출하기', () => {
    const events = {};
    const $emit = (event, ...args) => {
      events[event] = [...args];
    };

    Emitter.methods.emitEvent.call({ $emit }); // call을 사용하면 mount 하지 않고도 사용 가능

    expect(events.myEvent).toEqual(['name', 'password']);
  });
});
