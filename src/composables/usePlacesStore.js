import { computed, onMounted } from "vue"
import { useStore } from "vuex"
import { searchPlacesByTerm } from "../store/places/actions"

export const usePlacesStore = ()=>{
    const store = useStore()

    onMounted(()=>{
        if(!store.getters['places/isUserLocationReady']){
            store.dispatch('places/getInitialLocation')
        }

    })

    return {
        isLoading: computed(()=>store.state.places.isLoading),
        userLocation: computed(()=>store.state.places.userLocation),

        isUserLocationReady: computed(()=>store.getters['places/isUserLocationReady']),
        searchPlacesByTerm: (query)=>store.dispatch('places/searchPlacesByTerm',query)
    }
}