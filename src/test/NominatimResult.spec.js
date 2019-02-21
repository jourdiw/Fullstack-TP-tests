import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import NominatimResult from '../components/NominatimResult/NominatimResult.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

describe('NominatimResult.vue', () => {
  test('renders correctly without props', () => {
    const wrapper = shallowMount(NominatimResult);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('renders correctly with props', () => {
    const wrapper = shallowMount(NominatimResult, {
      propsData: {
        result: [
          {
            class: 'work',
            display_name: 'Work Test',
          },
          {
            class: 'ending',
            display_name: 'My second test',
          },
          {
            class: 'fun',
            display_name: 'Last test',
          },
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
