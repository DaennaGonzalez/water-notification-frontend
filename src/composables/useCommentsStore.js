import { computed, onMounted } from "vue"
import { useStore } from "vuex"

export const useCommentsStore = ()=>{
    const store = useStore()

    onMounted(()=>{
        store.dispatch('comments/loadEntries');
    })
    
    return {
        isLoading: computed(()=>store.state.comments.isLoading),
        comments: computed(()=>store.state.comments.entries)
    }
}