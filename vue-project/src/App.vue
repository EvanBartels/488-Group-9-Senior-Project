<template>
  <v-app>
    <v-app-bar app elevation="2" color="secondary" dark>
      <!-- <v-app-bar-nav-icon @click="toggleSidebar" /> -->
      <RouterLink to="/">
      <v-app-bar-title color="white">
        <v-icon color="white">mdi-glass-cocktail
        </v-icon>
        <span style="color:white">Cocktail Mixer</span>
      </v-app-bar-title>
    </RouterLink>
      <v-spacer></v-spacer>
      <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-hamburger" v-bind="props"></v-btn>
          </template>
          <v-list width="200">
            <v-list-item>
              <v-list-item-title>
              <RouterLink to="/hello">Hello</RouterLink>
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
export default {
  methods: {
    toggleSidebar() {
      // Implement logic to toggle the sidebar
    },
  },
};
</script>