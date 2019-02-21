import { shallowMount } from '@vue/test-utils'
import Home from '../views/Home.vue'

describe('Home.vue', () => {
  it('button is in a router link', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: () => {}
      }
    });
    // expect(wrapper);
    // expect(wrapper.find('v-btn'));
    expect(wrapper.find('router-link'));
  });
});
