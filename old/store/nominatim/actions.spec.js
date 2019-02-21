/* global describe it expect */
import actions, { SET_SEARCH } from './actions';

describe('nominatim actions', () => {
  it('SET_SEARCH', () => {
    const payload = actions[SET_SEARCH]('Toulouse');
    expect(payload.type).toBe(SET_SEARCH);
    expect(payload.payload).toBe('Toulouse');
  });
});
