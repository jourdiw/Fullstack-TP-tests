import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import nominatim from './nominatim';
import overpass from './overpass';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    nominatim,
    overpass,
  },
  plugins: [createLogger()],
});

// store.commit('SET_SEARCH', 'Toulouse');
// store.dispatch('GET_RESULT', 'Toulouse');

export default store;
