<template>
    
  <div class="text-center">
    <div :class="{ 'centered-container': true }">
     
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
  
    <div class="selectedlist">
  <v-card class="mx-auto bg-info" style="width: 350px">
     <v-list disabled>
     <v-list-subheader>Selected Ingredients</v-list-subheader>
     <v-list-item v-for="(item, index) in selectedIngredients" :key="index">
      <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
     </v-list>
    </v-card>
  </div>
  </div>
  <br />
    <div :class="{ 'centered-container': false }">
      <div style="margin-bottom: 20px;">
    <v-btn @click="searchDrinksDemo(selectedIngredients, vodkaCranberryIngredientList)">Search Drinks</v-btn>
    <!-- <p>Selected Ingredients: {{ selectedIngredients}}</p> -->
      </div>


  <div>
    <v-card class="mx-auto" max-width="500">
     <v-list disabled>
     <v-list-subheader>Drink Results</v-list-subheader>
     <v-list-item v-for="(item, index) in matchingDrinks" :key="index">
      <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
     </v-list>
    </v-card>
  </div>
</div>
</div>
  
</template>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  margin: 0;
}
.selectedlist{
  margin-left: 50px;
}

</style>

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
      matchingDrinks: [],
      vodkaCranberryIngredientList: [{title: "Vodka" }, {title: "Cranberry Juice"}],
    }),
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
              myIngredients.push(this.selectedIngredients[i].title);
            }
            let drinkMatch = true;
            for (let i = 0; i < this.vodkaCranberryIngredientList.length; i++) {
              let ingredient = this.vodkaCranberryIngredientList[i].title;
              if (myIngredients.includes(ingredient) == false) {                
                drinkMatch = false;
                break;
              }
            }
            if (drinkMatch) {
              this.matchingDrinks.push({title: "Vodka Cranberry"});
            }
          }
      },
  }
</script>