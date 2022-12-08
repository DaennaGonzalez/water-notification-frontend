<template>
    <nav class="navbar bg-secundary">
        <a class="navbar-brand text-white">
            <img src="@/assets/LOGO-HOYSIHAYAGUA.png" 
                 alt="Vue Logo"
                 height="50"
                 width="150"
                 class="d-inline-block align-text-top mx-2">

           <span class="titulo" style="color:blue">Notificacion de Agua</span>
        </a>


        <div class="d-flex">
            <button  @click.prevent="signOut" class="btn btn-outline-info mx-2">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>
<script>
import { useStore} from "vuex";
import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '../../../api/firebase'


export default {
    name: "NavBar",
    setup() {

    const store = useStore()
    const router = useRouter()

    auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
    return store.getters.user;
    });

    const signOut = async () => {
        await store.dispatch('logOut')
        router.push('/')
    }

    return {user,signOut}
    }
};
</script>
