<template>
  <v-app>
    <v-app-bar app elevation="2" color="secondary" dark>
      <!-- <v-app-bar-nav-icon @click="toggleSidebar" /> -->
      <v-app-bar-title>Cocktail Mixer</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-hamburger" v-bind="props"></v-btn>
          </template>
          <v-list width="200">
            
          </v-list>
      </v-menu> 
    </v-app-bar>

    <v-main>
      
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      // Implement logic to toggle the sidebar
    },
  },
};
</script>