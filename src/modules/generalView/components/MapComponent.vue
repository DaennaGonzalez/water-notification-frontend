<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted } from 'vue'
import { useGeolocation } from '@/util/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyDxnaxez-sh3TRoMOz-xKqYaENLiEcoTVU'
export default {
    name: 'MapComponent',
    setup() {
        const { coords } = useGeolocation()
        const currPos = computed(() => ({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))


        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
        const mapDiv = ref(null)
        let map = ref(null)
        onMounted(async () => {
            await loader.load()
            map.value = new google.maps.Map(mapDiv.value, {
                center: currPos.value,
                zoom: 15
            })

        })

        return { currPos, mapDiv }
    }
}
</script>

<template>
    <div class="d-flex text-center" style="height: 10vh">
        <div class="m-auto">
            <h4>Your Position</h4>
            Latitude: {{ currPos.lat }}, Longitude:
            {{ currPos.lng }}
        </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
</template>