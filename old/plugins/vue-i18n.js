import Vue from 'vue';
import VueI18n from 'vue-i18n';

import locales from '../lang';

Vue.use(VueI18n);

export default new VueI18n({
  locale: window.localStorage.language || 'fr_FR',
  messages: locales,
});
