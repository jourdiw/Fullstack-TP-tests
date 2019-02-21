import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import osmtogeojson from 'osmtogeojson';

// bug leaflet with webpack
// cf https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-319569682
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import iconUrl from '../../assets/marker-green.svg';

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [42, 42], // size of the icon
  iconAnchor: [21, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -42], // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
  shadowAnchor: [11, 41],
});

export default {
  name: 'Map',
  props: [
    'nominatimResult',
    'overpassResult',
    'currentMarker',
    'center',
  ],
  data() {
    return {
      markers: [],
    };
  },
  methods: {
    removeMarkers() {
      this.markers.forEach((marker, index) => {
        marker.removeFrom(this.map);
        delete this.markers[index];
      });
    },
    displayMarkers(markers) {
      this.removeMarkers();
      markers.forEach((marker) => {
        if (marker.lat && marker.lon) {
          this.markers.push(L.marker([marker.lat, marker.lon])
            .addTo(this.map)
            .bindPopup(marker.display_name));
        }
      });
    },
    displayGeoJSON(geojson) {
      const osmGeojson = osmtogeojson(new DOMParser().parseFromString(geojson, 'text/xml'));
      if (this.geojson instanceof L.GeoJSON) {
        this.geojson.removeFrom(this.map);
      }
      this.geojson = L.geoJSON(osmGeojson).addTo(this.map);
    },
    emitBBox(bbox) {
      this.$emit('bbox', bbox);
    },
  },
  mounted() {
    this.map = L.map('leaflet-map', { zoomControl: false })
      .setView([43.604268, 1.441019], 13);

    L.control.zoom({
      position: 'topright',
    }).addTo(this.map);

    this.map.on('zoomend moveend', () => {
      this.emitBBox(this.map.getBounds());
    });
    this.emitBBox(this.map.getBounds());

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    if (this.nominatimResult) {
      this.displayMarkers(this.nominatimResult);
    }
  },
  watch: {
    nominatimResult(val) {
      this.displayMarkers(val);
    },
    overpassResult(val) {
      this.displayGeoJSON(val);
    },
    center(val) {
      this.map.panTo(val);
    },
    currentMarker(val) {
      if (val !== '') {
        this.map.panTo(val);
      }
    },
  },
};
