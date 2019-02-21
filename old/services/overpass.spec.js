/* global describe test expect jest */
import axios from 'axios';
import overpass from './overpass';

describe('nominatim service is well formed', () => {
  test('expect it has getNominatimData method', () => {
    expect(overpass.getOverpassData).not.toBeUndefined();
  });

  test('expect the default url is the right one', (done) => {
    // mock the axios.post method, so it will just resolve the Promise.
    axios.get = jest.fn((url) => {
      expect(url).toBe('http://overpass-api.de/api/interpreter?data=[out:xml];(way[%22leisure%22=%22park%22](43.54506428956427,1.3108062744140625,43.663525432098275,1.571388244628906););out%20body;%3E;out%20skel%20qt;');
      return Promise.resolve({ data: 'Hello' });
    });
    overpass.getOverpassData().then((data) => {
      expect(data).toBe('Hello');
      done();
    });
  });

  test('expect the catch works well', (done) => {
    // mock the axios.post method, so it will just resolve the Promise.
    axios.get = jest.fn(() => Promise.reject());
    overpass.getOverpassData().catch(() => done());
  });
});
