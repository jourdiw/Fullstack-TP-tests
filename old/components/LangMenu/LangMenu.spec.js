import { shallowMount } from '@vue/test-utils';
import LangMenu from './LangMenu.vue';

describe('LangMenu.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(LangMenu, {
      mocks: {
        $i18n: { locale: 'FR_fr' },
      },
    });
    expect(wrapper.vm.$el).toBeDefined();
  });
});
