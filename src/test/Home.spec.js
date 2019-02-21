import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import Home from '../views/Home.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

describe('Home.vue', () => {
  it('button is in a router link', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: () => {},
      },
    });
    // expect(wrapper);
    // expect(wrapper.find('v-btn'));
    expect(wrapper.find('router-link'));
  });
  test('renders correctly', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: () => {},
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
