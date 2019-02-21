/* global describe test expect jest */
import axios from 'axios';
import nominatim from './nominatim';

describe('nominatim service is well formed', () => {
  test('expect it has getNominatimData method', () => {
    expect(nominatim.getNominatimData).toBeDefined();
  });

  test('expect the default url is the right one', (done) => {
    // mock the axios.post method, so it will just resolve the Promise.
    const address = 'pouet';
    axios.get = jest.fn((url) => {
      expect(url).toBe(`http://nominatim.openstreetmap.org/search/${address}?format=json`);
      return Promise.resolve({ data: 'Hello' });
    });
    nominatim.getNominatimData(address).then((data) => {
      expect(data).toBe('Hello');
      done();
    });
  });

  test('expect the catch works well', (done) => {
    // mock the axios.post method, so it will just resolve the Promise.
    axios.get = jest.fn(() => Promise.reject());
    nominatim.getNominatimData().catch(() => done());
  });
});
