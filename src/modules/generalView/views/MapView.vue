<template>
    <div class="container-fluid">
        <map-component></map-component>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        MapComponent: defineAsyncComponent(() => import("../components/MapComponent.vue")),
    }
}
</script>
