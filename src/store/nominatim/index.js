import actions from './actions';
import mutations from './mutations';

const nominatim = {
  namespaced: true,
  state: {
    results: [],
    loading: false,
    error: null,
  },
  mutations,
  actions,
};

export default nominatim;
