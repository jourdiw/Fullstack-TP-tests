/* global describe it expect */
import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import NominatimResult from './NominatimResult.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('NominatimResult.spec.js', () => {
  it('is a Vue instance', () => {
    const vm1 = mount(NominatimResult, {
      localVue,
    });
    expect(vm1.isVueInstance()).toBeTruthy();
  });

  // it('has the right data to display', () => {
  //   const wrapper = mount(NominatimResult, {
  //     propsData: {
  //       result: 'Hello World',
  //     },
  //     localVue,
  //   });
  //   expect(wrapper.props().result).toBe('Hello World');
  // });

  it('has the expected html structure', () => {
    const vm3 = mount(NominatimResult, {
      propsData: {
        result: [{
          display_name: 'Hello World 2',
          class: 'pouet',
        }, {
          display_name: 'Hello World 3',
          class: 'pouet',
        }],
      },
      localVue,
    });
    expect(vm3.element).toMatchSnapshot();
  });
});
