<template>
  <v-app>
    <v-app-bar app elevation="2" color="secondary" dark>
      <!-- <v-app-bar-nav-icon @click="toggleSidebar" /> -->
      <RouterLink v-if="!user.loggedIn" to="/">
      <v-app-bar-title color="white">
        <v-icon color="altColor">mdi-glass-cocktail
        </v-icon>
        <span style="color:white">COCKTAIL MIXER</span>
      </v-app-bar-title>
      </RouterLink>
      
      <RouterLink v-if="user.loggedIn" to="/Dashboard">
        <v-app-bar-title color="white">
        <v-icon color="altColor">mdi-glass-cocktail
        </v-icon>
        <span style="color:white">COCKTAIL MIXER</span>
      </v-app-bar-title>
      </RouterLink>

      <v-spacer></v-spacer>
      <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color='altColor' icon="mdi-menu-down-outline" v-bind="props"></v-btn>
          </template>
          <v-list width="200">

            <v-list-item v-if="!user.loggedIn">
              <v-list-item-title>
              <RouterLink to="/">Home</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
              <RouterLink to="/about">About</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item  v-if="user.loggedIn">
              <v-list-item-title>
              <RouterLink to="/Dashboard">Dashboard</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="user.loggedIn">
              <v-list-item-title>
                <RouterLink to="/UserSettings">Settings</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="user.loggedIn">
              <v-list-item-title>
                <RouterLink to="/SaveIngredients">Save Ingredients</RouterLink>
              </v-list-item-title>
            </v-list-item>
            
            <v-list-item  v-if="user.loggedIn">
              <v-list-item-title @click.prevent="signOut">
                <RouterLink to="/">Log Out</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!user.loggedIn">
              <v-list-item-title>
              <RouterLink to="/sign-up">Register</RouterLink>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!user.loggedIn">
              <v-list-item-title>
              <RouterLink to="/login">Login</RouterLink>
              </v-list-item-title>
            </v-list-item>

          </v-list>
      </v-menu> 
    </v-app-bar>

    <!-- don't touch-->
    <v-main> 
      <router-view></router-view>
    </v-main>
 
 </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'
import { reactive } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

import { useStore} from "vuex"
import { useRouter } from "vue-router"
import {computed} from "vue"
import { auth } from './firebaseConfig'

export default {
  name: 'App',
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

    return {user, signOut}
 },

  methods: {
    toggleSidebar() {
      // Implement logic to toggle the sidebar
    },
  },
};
</script>