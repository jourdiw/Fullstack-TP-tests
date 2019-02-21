/* global describe it expect */
import mutations from './mutations';

import {
  SET_SEARCH,
  FETCH_RESULT,
  UPDATE_RESULT,
  ERROR_API,
} from './actions';

describe('mutations', () => {
  it('SET_SEARCH', () => {
    const state = { search: null };
    mutations[SET_SEARCH](state, 'Toulouse');
    expect(state.search).toBe('Toulouse');
  });
  it('FETCH_RESULT', () => {
    const state = { loading: false };
    mutations[FETCH_RESULT](state);
    expect(state.loading).toBe(true);
  });
  it('UPDATE_RESULT', () => {
    const state = { loading: true };
    mutations[UPDATE_RESULT](state, { results: ['pouet'] });
    expect(state.loading).toBe(false);
    expect(state.results).toEqual(['pouet']);
  });
  it('ERROR_API', () => {
    const state = { loading: true, results: ['pouet'], error: null };
    mutations[ERROR_API](state, { error: 'ouie' });
    expect(state.loading).toBe(false);
    expect(state.results).toEqual([]);
    expect(state.error).toBe('ouie');
  });
});
