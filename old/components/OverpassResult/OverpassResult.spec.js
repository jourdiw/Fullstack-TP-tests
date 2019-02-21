/* global describe it expect beforeEach beforeAll */
import { mount } from '@vue/test-utils';
import OverpassResult from './OverpassResult.vue';

describe('OverpassResult.spec.js', () => {
  beforeAll(() => {
    console.log('pouic');
  });

  beforeEach(() => {
    console.log('pouet');
  });

  it('is a Vue instance', () => {
    const vm1 = mount(OverpassResult);
    expect(vm1.isVueInstance()).toBeTruthy();
    expect(vm1.is('textarea')).toBe(true);
  });

  it('has the right data to display', () => {
    const wrapper = mount(OverpassResult, {
      propsData: {
        result: 'Hello World',
      },
    });
    expect(wrapper.props().result).toBe('Hello World');
  });

  it('has the expected html structure', () => {
    const vm3 = mount(OverpassResult, {
      propsData: {
        result: 'Hello World 2',
      },
    });
    expect(vm3.element).toMatchSnapshot();
  });
});
