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
    <div class="row">
        <div class="col-lg-6">
            <button class="btn btn-primary mx-3"
            @click="$router.push('/comentarios')">
            Nueva comentario
        </button>

        </div>
        <div class="col-lg-6">
            <button class="btn btn-primary mx-3"
          @click="$router.push('/grafica')">
          Ver grafica
         </button>
        </div>
    </div>


    <map-view />
</template>