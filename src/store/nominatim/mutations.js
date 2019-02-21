import Vue from 'vue';

import {
  FETCH_RESULT,
  UPDATE_RESULT,
  ERROR_API,
  SET_SEARCH,
} from './actions';

const mutations = {
  [SET_SEARCH](state, payload) {
    Vue.set(state, 'search', payload);
  },
  [FETCH_RESULT](state) {
    Vue.set(state, 'loading', true);
  },
  [UPDATE_RESULT](state, payload) {
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
