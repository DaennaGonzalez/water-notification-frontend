<template>

    <button class="btn btn-primary" @click="onCommentButtonClicked"> Crear commentario</button>
</template>
<script>

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'CommentButton',
    setUp(){
        const router = useRouter()
        const onCommentButtonClicked =  () =>  {
            console.log("Hola ");
            router.push('/comentarios')}
        
        return {
            onCommentButtonClicked
        }
    }
})

</script>
<style scoped>


</style>