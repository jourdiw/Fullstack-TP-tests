import Vue from 'vue';

import {
  FETCH_OVERPASS,
  ERROR_API,
  UPDATE_OVERPASS,
} from './actions';

const mutations = {
  [FETCH_OVERPASS](state) {
    Vue.set(state, 'loading', true);
  },
  [UPDATE_OVERPASS](state, payload) {
    Vue.set(state, 'results', payload.results);
    Vue.set(state, 'loading', false);
  },
  [ERROR_API](state, payload) {
    Vue.set(state, 'loading', false);
    Vue.set(state, 'results', []);
    Vue.set(state, 'error', payload.error);
  },
};

export default mutations;
