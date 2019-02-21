import Axios from 'axios';
import nominatim from '../services/nominatim';

describe('nominatim.js', () => {
  test('getNominatimData function exists', () => {
    expect(nominatim.getNominatimData).toBeDefined();
  });
  test('call the default URL', (done) => {
    Axios.get = jest.fn((url) => {
      expect(url).toBe('http://nominatim.openstreetmap.org/search/toulouse?format=json');
      return Promise.resolve({ data: 'myData' });
    });
    nominatim.getNominatimData('toulouse')
      .then((data) => {
        expect(data).toBe('myData');
        done();
      });
  });
});
