import { computed, defineComponent,ref} from "vue"
import SearchResults from "../searchresults/SearchResults.vue";
export default defineComponent({
    name: "SearchBar",
    components:{
        SearchResults
    },
    setup() {

        const debouncedTimeout=ref()
        const debouncedValued=ref('hola')
        return { 
            searchTerm: computed({
                get(){
                    return debouncedValued.value
                },
                set(val){

                    if(debouncedTimeout.value) clearTimeout(debouncedTimeout.value)

                    debouncedValued.value = setTimeout(()=>{
                        debouncedValued.value = val
                    },500)
                    
                }
            }),
            debouncedValued }
    }
});