<script>
/* eslint-disable no-undef */
import {usePlacesStore} from '@/composables'
import MapView from '../../../components/mapview/MapView.vue'
export default {
    name: 'MapComponent',
    components:{
        MapView 
    },
    setup() {
        usePlacesStore()
    }
}
</script>

<template>
    <map-view />
</template>