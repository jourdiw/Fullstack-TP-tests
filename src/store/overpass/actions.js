import OverpassService from '../../services/overpass';

export const GET_OVERPASS = 'GET_OVERPASS';
export const FETCH_OVERPASS = 'FETCH_OVERPASS';
export const UPDATE_OVERPASS = 'UPDATE_OVERPASS';
export const ERROR_API = 'ERROR_API';

const actions = {
  [GET_OVERPASS]({ commit }, { bbox }) {
    commit(FETCH_OVERPASS);
    OverpassService.getOverpassData(bbox)
      .then((response) => {
        commit(UPDATE_OVERPASS, { results: response || [] });
      }).catch((err) => {
        commit(ERROR_API, { error: err });
      });
  },
};

export default actions;
