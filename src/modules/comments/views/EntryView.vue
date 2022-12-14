<template>

    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-30">
            <textarea :disabled="disable" v-model="entry.text" placeholder="¿Qué sucedió hoy?"></textarea>
        </div>

        <input type="checkbox" id="d-flex flex-column checkbox" v-model="entry.checked" :disabled="disable" />
        <label for="checkbox">¿Va a ver agua?</label>
    </template>
    <search-bar/>
    <map-view/>
    <Fab v-show="!disable" icon="fa-save" @on:click="saveEntry" />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex' // computed!!!
import Swal from 'sweetalert2'
import getDayMonthYear from '@/helpers/getDayMonthYear'
import MapView from '@/components/mapview/MapView.vue'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('@/components/Fab.vue')),
        MapView: defineAsyncComponent(()=> import('@/components/mapview/MapView.vue')),
        SearchBar: defineAsyncComponent(()=> import('@/components/searchbar/SearchBar.vue'))
    },

    data() {
        return {
            entry: null,
            disable: false
        }
    },

    computed: {
        ...mapGetters('comments', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }
    },

    methods: {
        ...mapActions('comments', ['createEntry', 'deleteEntry']),

        loadEntry() {

            let entry;

            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
                this.disable = false;
            } else {
                entry = this.getEntryById(this.id)
                this.disable = true;
                if (!entry) return this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()

            if (!this.entry.id) {
                // Crear una nueva entrada

                if(!this.entry.text){
                    Swal.hideLoading();
                    Swal.fire('Error', 'Comentario vacio', 'warning')
                    return;
                }

                const id = await this.createEntry(this.entry)
                this.$router.push({ name: 'entry', params: { id } })
            }
            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')


        },
        async onDeleteEntry() {

            const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if (isConfirmed) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminado', '', 'success')
            }
        },
    },

    created() {
        // console.log(this.$route.params.id)
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }



}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>