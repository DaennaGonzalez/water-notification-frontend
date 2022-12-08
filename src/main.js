import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from "@fawmi/vue-google-maps";
import './styles/styles.scss'
//import { auth, app } from './api/firebase';



createApp(App)
    .use(VueGoogleMaps, {
        load: {
          key: 'AIzaSyDxnaxez-sh3TRoMOz-xKqYaENLiEcoTVU',
          version: "weekly",
      
        }
      })
    .use( store )
    .use( router )
    .mount('#app')
