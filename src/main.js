// import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import i18n from './plugins/vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
