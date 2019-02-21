import actions from './actions';
import mutations from './mutations';

const overpass = {
  namespaced: true,
  state: {
    results: [],
    loading: false,
    error: null,
  },
  mutations,
  actions,
};

export default overpass;
