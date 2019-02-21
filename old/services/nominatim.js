// import axios from 'axios';

const NOMINATIM_URL = 'http://nominatim.openstreetmap.org/search/';
const DEFAULT_QUERY = 'toulouse';
const DEFAULT_FORMAT = '?format=json';

class NominatimService {
  getNominatimData = (search = DEFAULT_QUERY) => (
    // axios.get(NOMINATIM_URL + search + DEFAULT_FORMAT)
    //   .then(response => response.data)
    {}
  );
}

export default new NominatimService();
