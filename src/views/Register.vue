<template>
  <div>
      <div class="row justify-content-center" style="background-color: aliceblue; overflow-x: hidden; height: 100hv;">
        <div class="col-md-5">
          <div class="card text-center mt-5">
            <div class="card-header">Register</div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div> 
              <form action="#" @submit.prevent="Register">
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                  <div class="col-md-6">
                    <input
                      id="name"
                      type="name"
                      class="form-control"
                      name="name"
                      value required autofocus v-model="name"/>
                  </div>
                </div>
  
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
  
                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email" value required autofocus v-model="email"/>
                  </div>
                </div>
  
                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
  
                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      v-model="password"
                    />
                  </div>
                </div>
  
                <div class="form-group row mb-0">
                  <div class="mt-3 d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Register</button>
                    <router-link
                                     to="/Login"
                                     custom
                                     v-slot="{ navigate }">
                                    <button
                                    @click="navigate"
                                    role="link"
                                    class="btn btn-secondary" type="button">¿Ya tienes cuenta? Ir a Login</button>
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
    name: "Register",
   setup() {
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const error = ref(null)
  
      const store = useStore()
      const router = useRouter()
  
      const Register = async () => {
        try {
          await store.dispatch('register', {
            email: email.value,
            password: password.value,
            name: name.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
              }
      }
  
      return { Register, name,email, password, error }
    }
  };
  </script>
  