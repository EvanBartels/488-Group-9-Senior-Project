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
                  <label for="name" class="col-md-4 col-form-label" style="text-align: left;">New Name:</label>
  
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
                  <div class="col-md-8" style="margin-bottom: 30px; text-align: center;">
                    <v-btn type="submit" class="btn btn-primary">Change Name</v-btn>
                  </div>
                </div>
              </form>

              <div class="card-header">Change the password to login to your account.</div>
              <form action="#" @submit.prevent="ChangePassword">
                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label" style="text-align: left;">New Password:</label>
  
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
                  <div class="col-md-8" style="margin-bottom: 10px; text-align: center;">
                    <v-btn type="submit" class="btn btn-primary">Change Password</v-btn>
                  </div>
                </div>

              </form>
              
            </div>
            <div>


            </div>
            <div class="card-header"><strong>Delete Your Account: The button below will delete your account. Once pressed all your information will be removed from this site.</strong></div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#" @submit.prevent="RemoveAll()">
                <div class="form-group row mb-0">
                  <div class="col-md-8" style='text-align: center;'>
                    <button type="submit" class="btn btn-primary" style="color: white; background-color: red; padding: 10px; border: none; border-radius: 4px; cursor: pointer;" onclick="RemoveAll()">Delete Account</button>
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
      const password = ref('')
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

      const ChangePassword = async () => {
        try {
          await store.dispatch('ChangePassword', {password: password.value})
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

      return {name, password, error, ChangeName, ChangePassword, DeleteUser}
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
.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: black;
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