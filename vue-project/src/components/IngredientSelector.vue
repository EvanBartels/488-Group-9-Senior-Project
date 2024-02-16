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
            <v-list-item-title>{{ item.ingredientName }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div>
    <v-card class="mx-auto" max-width="500">
       <v-list disabled>
       <v-list-subheader>Selected Ingredients</v-list-subheader>
       <v-list-item v-for="(item, index) in selectedIngredients" :key="index">
        <v-list-item-title v-text="item.ingredientName"></v-list-item-title>
        </v-list-item>
       </v-list>
      </v-card>
      <v-btn @click="searchDrinksDemo(selectedIngredients, vodkaCranberryIngredientList)">Search Drinks</v-btn>
    </div>
    <div>
      <v-card class="mx-auto" max-width="500">
       <v-list disabled>
       <v-list-subheader>Drink Results</v-list-subheader>
       <v-list-item v-for="(item, index) in matchingDrinks" :key="index">
        <v-list-item-title v-text="item.drinkName"></v-list-item-title>
        </v-list-item>
       </v-list>
      </v-card>
    </div>
    </div>
  </template>
  <script>
    import axios from 'axios'
    // const API_URL = "http://localhost:5019/"; //TODO azure web service url
    export default {
      data: () => ({
        items: [],
        selectedIngredients: [],
        matchingDrinks: [],
        vodkaCranberryIngredientList: [{ingredientName: "Vodka" }, {ingredientName: "Cranberry Juice"}],
      }),
      mounted() {
        this.getIngredients();
      },
      methods: {
            selectIngredient(ingredient) {
              this.selectedIngredients.push(ingredient);
            },
            // This will be a demo of the basics of how ingredient search will work
            // The likely end solution I'm thinking of will this will call from an API
            // and all the actual logic regarding drink search will be done on the backend in C#
            searchDrinksDemo() {
              this.matchingDrinks = [];
              let myIngredients = [];
              for (let i = 0; i < this.selectedIngredients.length; i++) {
                myIngredients.push(this.selectedIngredients[i].ingredientName);
              }
              let drinkMatch = true;
              for (let i = 0; i < this.vodkaCranberryIngredientList.length; i++) {
                let ingredient = this.vodkaCranberryIngredientList[i].ingredientName;
                if (myIngredients.includes(ingredient) == false) {                
                  drinkMatch = false;
                  break;
                }
              }
              if (drinkMatch) {
                this.matchingDrinks.push({drinkName: "Vodka Cranberry"});
              }
            },
            getIngredients() {
              axios.get("api/DrinkRecipe/GetIngredients").then(response => {
                this.items = response.data;
              });
              
            }
        },
    }
  </script>