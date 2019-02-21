import nominatimService from '@/services/nominatim';

export const GET_RESULT = 'GET_RESULT';
export const FETCH_RESULT = 'FETCH_RESULT';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const ERROR_API = 'ERROR_API';
export const SET_SEARCH = 'SET_SEARCH';

const actions = {
  [SET_SEARCH](address) {
    return {
      type: SET_SEARCH,
      payload: address,
    };
  },
  [GET_RESULT]({ commit }, { address }) {
    commit(FETCH_RESULT);
    nominatimService.getNominatimData(address)
      .then((json) => {
        commit(UPDATE_RESULT, { results: json || [] });
      }).catch((err) => {
        commit(ERROR_API, { error: err });
      });
  },
};

export default actions;
