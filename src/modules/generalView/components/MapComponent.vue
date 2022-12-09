<script>
/* eslint-disable no-undef */
import {usePlacesStore} from '@/composables'
import MapView from '@/components/mapview/MapView.vue'
import CommentButton from '@/components/btn-comment/CommentButton.vue'
export default {
    name: 'MapComponent',
    components:{
        MapView,
        CommentButton 
    },
    setup() {
        usePlacesStore()
    }
}
</script>

<template>
    <h4> Zonas afectadas </h4>
    <comment-button/>
    <map-view />
</template>