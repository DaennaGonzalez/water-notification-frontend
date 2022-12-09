import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from "@fawmi/vue-google-maps";
import chart from 'vue-chartjs';
import './styles/styles.scss'
//import { auth, app } from './api/firebase';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuenAiLCJhIjoiY2xiZm85YWdiMDNqcjNwbzN5OXg0bDBteiJ9.E4Bmd-YN32MAk1ZZD_iDbQ';

if(!navigator.geolocation){
  alert('Navegador no soporta el geolocation')
  throw Error('Navegador no soporta el geolocation')
}


createApp(App)
    .use(VueGoogleMaps, {
        load: {
          key: 'AIzaSyDxnaxez-sh3TRoMOz-xKqYaENLiEcoTVU',
          version: "weekly",
      
        }
      })
    .use( store )
    .use( router )
    .use(chart)
    .mount('#app')
