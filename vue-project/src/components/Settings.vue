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
                    <v-btn type="submit" class="btn btn-primary">Change Name</v-btn>
                  </div>
                </div>
              </form>
            </div>
            <div>


            </div>
            <div class="card-header"><strong>Delete Your Account: The button below will delete your account. Once pressed all your information will be removed from this site.</strong></div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#"  @click.prevent="RemoveAll()">
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <v-btn type="submit" class="btn btn-primary">Delete Account</v-btn>
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
  import axios from 'axios'

  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { auth } from '../firebaseConfig'
  
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
          router.push('/Dashboard')
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
    },

    data: () => ({
    userEmail: "",
    }),

    methods: {
      RemoveAll() {
        let userEmail = "";
        userEmail = auth.currentUser.email;

        //delete saved ingredients
        axios.delete('/api/Ingredient/RemoveAllSavedIngredients', {
          params: {
            userEmail: userEmail
          }
        }).then(response => {
            console.log("All ingredients removed");
        })
        .catch(error => {
            console.log("Error removing saved ingredients");
        })

        //delete favorited drinks
        axios.delete('/api/FavoriteDrink/RemoveAllFavoriteDrinks', {
          params: {
            userEmail: userEmail
          }
        }).then(response => {
            console.log("All drinks removed");
        })
        .catch(error => {
            console.log("Error removing favorite drinks");
        })

        //delete the user
        this.DeleteUser();
      }
    }
    
  }
  </script>

<style scoped>
  input {
    width: 50%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
  }
</style>