<template>
    
    <div class="text-center">
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="tertiary"
            v-bind="props"
          >
            Select ingredients
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="selectIngredient(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div>
    <v-card class="mx-auto" max-width="500">
       <v-list disabled>
       <v-list-subheader>Selected Ingredients</v-list-subheader>
       <v-list-item v-for="(item, index) in selectedIngredients" :key="index">
        <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
       </v-list>
    </v-card>
      <!-- <p>Selected Ingredients: {{ selectedIngredients}}</p> -->
    </div>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          { title: 'Vodka' },
          { title: 'Lime Juice' },
          { title: 'Cranberry Juice' },
          { title: 'Tequila' },
        ],
        selectedIngredients: [],
      }),
        methods: {
            selectIngredient(ingredient) {
            this.selectedIngredients.push(ingredient);
            },
        },
    }
  </script>