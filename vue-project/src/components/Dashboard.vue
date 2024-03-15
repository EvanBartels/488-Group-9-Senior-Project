  <!--
  <template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">

          <div class="card">
            <div v-if="user.loggedIn">
              <div class="card-header">Welcome, {{user.data.displayName}}</div>
              <div class="card-header">Current email: {{user.data.email}}</div>
              <div class="card-body">
                <div class="alert alert-success" role="alert">
                  You are logged in!
                  <p>
                    <v-btn @click="$router.push('/drink-creation')" variant="outlined"   class="text-h6" elevation=10 style="min-height: 60px; min-width: 200px; border-width: 1.5px;" >Create Drink <v-icon> mdi-glass-cocktail</v-icon></v-btn>
                  </p>
                    <div class="my-4">
                      <v-btn  @click.prevent="signOut" class="btn btn-primary">Log Out</v-btn>
                    </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-danger" role="alert">
              You are not logged in! 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </template>
-->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">
            <div class="card-header text-center">Welcome, {{ user.data.displayName }}</div>
            <div class="card-header text-center">Current email: {{ user.data.email }}</div>
            <div class="card-body">
              <div class="alert alert-success text-center" role="alert">
                You are logged in!
                <p>
                  <v-btn @click="$router.push('/drink-creation')" variant="outlined" class="text-h6" elevation=10 style="min-height: 60px; min-width: 200px; border-width: 1.5px;">Create Drink <v-icon>mdi-glass-cocktail</v-icon></v-btn>
                </p>
                <div class="my-4 text-center">
                  <v-btn @click.prevent="signOut" class="btn btn-primary">Log Out</v-btn>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="alert alert-danger text-center" role="alert">
            You are not logged in!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
  import { useStore} from "vuex";
  import { useRouter } from "vue-router";
  import {computed} from "vue";
  import { auth } from '../firebaseConfig'
  
  
  export default {
    name: "DashboardComponent",
  
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