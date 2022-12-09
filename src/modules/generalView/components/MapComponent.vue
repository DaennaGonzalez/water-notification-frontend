<script>
/* eslint-disable no-undef */
import {usePlacesStore} from '@/composables'
import MapView from '@/components/mapview/MapView.vue'
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
    <h4> Zonas afectadas </h4>
    <button class="btn btn-primary mx-3"
          @click="$router.push('/comentarios')">
          Nueva comentario
    </button>
    <map-view />
</template>