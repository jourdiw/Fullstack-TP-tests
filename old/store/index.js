import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import nominatim from './nominatim';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    nominatim,
    // overpass,
  },
  plugins: [createLogger()],
});

// store.commit('SET_SEARCH', 'Toulouse');
// store.dispatch('GET_RESULT', 'Toulouse');

export default store;
