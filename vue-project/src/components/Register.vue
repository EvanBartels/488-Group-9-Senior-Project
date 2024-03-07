<template>
    <div class="signup-container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header"></div>
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
                      value
                      required
                      autofocus
                      v-model="name"
                    />
                  </div>
                </div>
  
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
  
                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="email"
                    />
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
                  <div class="col-md-8 offset-md-4">
                    <v-btn type="submit" class="btn btn-primary">Register</v-btn>
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
    name: "RegisterComponent",
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
          router.push('/Dashboard')
        }
        catch (err) {
          error.value = err.message
              }
      }
  
      return { Register, name,email, password, error }
    }
  };
  </script>

<style scoped>
.signup-container {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
}
</style>