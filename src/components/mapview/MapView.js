
/*eslint no-undef: "error"*/
import { defineComponent, onMounted, ref, watch } from "vue"
import { usePlacesStore } from "../../composables/usePlacesStore";
import mapboxgl from "mapbox-gl";
export default defineComponent({
    name: "MapView",
    setup() {

        const mapElement = ref();
        const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = async () => {

            if (!mapElement.value) return;
            if (!userLocation.value) return;

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });


            const myLocationPopup = new mapboxgl.Popup()
            .setLngLat(userLocation.value)
            .setHTML(`
            <h4> Mi ubicacion</h4>
            <p>${userLocation.value}</p>
            `)

            const myLocationMarker = new mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(myLocationPopup)
            .addTo(map)
        }


        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap();
        }, { immediate: true })


        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
            console.log('No tengo localizacion aun')
        })
        return { isLoading, isUserLocationReady, mapElement }
    }
});