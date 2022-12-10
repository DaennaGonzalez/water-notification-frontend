<template>
    <Navbar />
    <div class="row">
        <div class="col-lg-6">
            <button class="btn btn-primary mx-3"
            @click="$router.push('/')">
            Volver a mapa general
        </button>
        </div>
        <div class="col-lg-6">
            <button class="btn btn-primary mx-3"
            @click="$router.push('/comentarios')">
            Nueva comentario
        </button>

        </div>
        </div>
    <div v-if="isLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div v-else class="d-flex">           
        
        <div class="col-4">
            <router-view />
        </div>
       </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../../../components/Navbar.vue")),
},
    
}
</script>