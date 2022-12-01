<template>
    <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100vw; height: 20rem"
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </template>
  
  <script>
import { computed } from '@vue/reactivity';
import { useGeolocation } from '../../../util/useGeolocation';

  export default {
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
      };
    },
    setup(){
        const {coords} = useGeolocation()
        const currPos = computed(()=>({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))
        return {currPos}
    }
  };
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  