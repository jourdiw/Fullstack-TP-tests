<template>
  <v-layout>
    <v-flex xs6 sm5 md4 :style="{
      'height': 'calc(100vh - 64px - 36px)',
      'max-height': 'calc(100vh - 64px - 36px)',
      'overflow': 'auto'
    }">
      <mc-address
        :address="from"
        label="From"
        @select="selectedAddress = from"
        @search="searchAddress(from)"
      ></mc-address>
      <mc-address
        :address="to"
        label="To"
        @select="selectedAddress = to"
        @search="searchAddress(to)"
      ></mc-address>
      <transition name="fade">
        <mc-address-form
          :address="selectedAddress"
          v-if="selectedAddress !== ''"
          @close="selectedAddress = ''"
        ></mc-address-form>
      </transition>
      <nominatim-result
        :result="nominatimResult"
        :loading='loadingNominatim'
        @select="selectMarker"
        @over="displayMarker"
        @out="hideMarker"
      ></nominatim-result>
    </v-flex>
    <v-flex xs6 sm7 md8>
      <mc-map
        :nominatim-result='nominatimResult'
        :overpass-result='overpassResult'
        :center='center'
        :current-marker='currentNominatimResult'
        @bbox='searchOverpass'
      >
        <template slot="popup">
          <div v-if="currentNominatimResult !== ''">
            {{ currentNominatimResult.display_name }}
          </div>
          <div v-else>
            Aucune adresse sélectionnée.
          </div>
        </template>
      </mc-map>
    </v-flex>
  </v-layout>
</template>

<script>

import { mapState } from 'vuex';

import Address from '../components/Address/Address.vue';
import AddressForm from '../components/AddressForm/AddressForm.vue';
import NominatimResult from '../components/NominatimResult/NominatimResult.vue';
import Map from '../components/Map/Map.vue';
import '../filters/uppercase';
// import NominatimService from '../services/nominatim';
// import { GET_RESULT } from '../store/nominatim/actions';
// import OverpassService from '../services/overpass';
// import { GET_OVERPASS } from '../store/overpass/actions';

export default {
  name: 'App',
  data: () => ({
    from: {
      road: '52 rue Jacques Babinet',
      zipCode: '31000',
      city: 'Toulouse',
      complement: 'Makina Corpus',
      country: 'Occitanie',
    },
    to: {
      road: 'place du Capitole',
      zipCode: '31000',
      city: 'Toulouse',
      state: 'France',
    },
    selectedAddress: '',
    // loadingNominatim: false,
    // loadingOverpass: false,
    // nominatimResult: [],
    // overpassResult: '',
    center: {},
    currentNominatimResult: '',
  }),
  computed: mapState({
    nominatimResult(state) {
      return state.nominatim.results;
    },
    loadingNominatim(state) {
      return state.nominatim.loading;
    },
    overpassResult(state) {
      return state.overpass.results;
    },
    loadingOverpass(state) {
      return state.overpass.loading;
    },
  }),
  methods: {
    getAddressString(address) {
      return `${address.road} ${address.zipCode} ${address.city}`;
    },
    // searchOverpass(bbox) {
    //   this.loadingOverpass = true;
    //   OverpassService.getOverpassData(bbox)
    //     .then((response) => {
    //       this.loadingOverpass = false;
    //       this.overpassResult = response;
    //     });
    // },
    async searchOverpass(bbox) {
      this.$store.dispatch('overpass/GET_OVERPASS', {
        bbox,
      });
    },
    async searchAddress(address) {
      this.$store.dispatch('nominatim/GET_RESULT', {
        address: this.getAddressString(address),
      });
      // this.loadingNominatim = true;
      // this.nominatimResult =
      //   await NominatimService.getNominatimData(this.getAddressString(address));
      // this.loadingNominatim = false;
    },
    selectMarker(item) {
      this.center = item;
    },
    displayMarker(item) {
      this.currentNominatimResult = item;
    },
    hideMarker() {
      this.currentNominatimResult = '';
    },
  },
  components: {
    'mc-address': Address,
    'mc-address-form': AddressForm,
    'mc-map': Map,
    'nominatim-result': NominatimResult,
  },
  mounted() {
    if (this.$route.params.address) {
      this.from = JSON.parse(this.$route.params.address);
    }
    if (this.from) {
      this.searchAddress(this.from);
    }
  },
};

</script>
