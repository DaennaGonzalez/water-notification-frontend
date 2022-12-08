<template>
    <Navbar />
    <div v-if="isLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div v-else class="container-fluid">
        <div class="row">
            <map-component />
        </div>
        <div class="row">
            <router-view />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Navbar: defineAsyncComponent(() => import("../../daybook/components/Navbar.vue")),
    }
}
</script>