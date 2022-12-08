<template>
    <div class="container-fluid login" style="background-image: url('https://images.unsplash.com/photo-1564450004949-76e37511ca68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=1600'); background-size: 100%;">
        <div class="row justify-content-center">
                <div class="col-lg-9">
                    <img src="../assets/IMAGENPRINCIPAL-HOYSIHAYAGUA.png" class="imagen" />
                </div>
            </div>
        <div class="row justify-content-center">
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{ error }}</div>
                        <form action="#" @submit.prevent="Login">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" value required
                                        autofocus v-model="email" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required
                                        v-model="password" />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="mt-3 d-grid gap-2">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                    <router-link
                                     to="/Register"
                                     custom
                                     v-slot="{ navigate }">
                                    <button
                                    @click="navigate"
                                    role="link"
                                    class="btn btn-secondary" type="button">Registrarse</button>
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: "Login",
    setup() {
        const email = ref('')
        const password = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const Login = async () => {
            try {
                await store.dispatch('logIn', {
                    email: email.value,
                    password: password.value
                })
                router.push('/')
            }
            catch (err) {
                error.value = err.message
            }
        }
        return { Login, email, password, error }
    }
};
</script>
<style>

.login{
    height: auto;
}
.imagen {
    max-width: 100%;
    height: auto;
}

.imagec {
    border: 4px blue;
    font-size: 20px;
    color: red;
    text-align: center;
    border-style: solid;
}
</style>
