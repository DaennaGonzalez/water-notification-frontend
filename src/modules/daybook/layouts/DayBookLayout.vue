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

    <div v-else class="d-flex">           
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col-4">
            <router-view />
        </div>
       </div>


       <div class="entry-title d-flex justify-content-between p-2">
            
            <div>
                <span class="text-success fs-3 fw-bold">Grafica de notificacion de Agua</span>
            </div>
        </div>
       <div class="d-flex">
           <BartChart />
       </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
import BartChart from '../components/BartChart.vue';
export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
    BartChart
},
    methods: {
        ...mapActions('journal', ['loadEntries'])
    },
    computed: {
        ...mapState( 'journal', ['isLoading'])
    },
    created() {
        this.loadEntries()
    }
}
</script>