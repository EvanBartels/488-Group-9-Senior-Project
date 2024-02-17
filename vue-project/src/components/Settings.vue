<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Change your displayed name if you desire.</div>
            <div style="margin-bottom: 20px;" class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#"  @submit.prevent="ChangeName">
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">New Name</label>
  
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
  
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Change Name</button>
                  </div>
                </div>
              </form>
            </div>
            <div>


            </div>
            <div class="card-header"><strong>Delete Your Account</strong></div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#"  @submit.prevent="DeleteUser">
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Delete Account</button>
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
    name: "SettingsComponent",
      setup() {
      const name = ref('')
      const error = ref(null)

      const store = useStore()
      const router = useRouter()

      const ChangeName = async () => {
        try {
          await store.dispatch('ChangeName', {name: name.value})
          router.push('/UserSettings')
        } catch (err) {
          error.value = err.message
        }
      }

      const DeleteUser = async () => {
        try {
          await store.dispatch('DeleteUser')
          router.push('/')
        } catch (err) {
          error.value = err.message
        }
      }

      return {name, error, ChangeName, DeleteUser}
    }
  };
  </script>