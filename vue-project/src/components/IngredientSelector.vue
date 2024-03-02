<template>
  
<div class="card">
  <div v-if="user.loggedIn">
    <div class="card-body">
      <div class="card-header" style="text-align: center">{{user.data.displayName}} is making a drink!</div>
    </div>
  </div>
</div>
    
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
          </v-list-item> <!-- TODO: Carter or Travis, -->
        </v-list>
      </v-menu>
      <div>
    <v-card class="mx-auto" max-width="500">
       <v-list disabled> <!--TODO: Carter or Travis, enable this v-list, make a @click call on the v-list-item to call a method that removes the ingredient from the list-->
       <v-list-subheader>Selected Ingredients</v-list-subheader>
       <v-list-item v-for="(item, index) in selectedIngredients" :key="index">
        <v-list-item-title v-text="item.ingredientName"></v-list-item-title>
        </v-list-item>
       </v-list>
      </v-card>
      <v-btn @click="getDrinksFromIngredients()">Search Drinks</v-btn>
    </div>
    <div>
      <v-card class="mx-auto" max-width="500">
       <v-list enabled>
       <v-list-subheader>Drink Results</v-list-subheader>
       <v-list-item v-for="(item, index) in matchingDrinks" :key="index" @click="showDrinkInfoDialog(item.drinkName)">
        <v-list-item-title v-text="item.drinkName"></v-list-item-title>
        </v-list-item>
       </v-list>
      </v-card>
    </div>
    </div>
    <DrinkInfoDialog v-if="isDialogOpen" :drinkName="selectedDrink" :userEmail="userEmail" @close="closeDrinkInfoDialog" />
  </template>
  <script>
    import axios from 'axios'
    // const API_URL = "http://localhost:5019/"; //TODO azure web service url

    import { useStore} from "vuex";
    import { useRouter } from "vue-router";
    import {computed} from "vue";
    import { auth } from '../firebaseConfig'
    import DrinkInfoDialog from './DrinkInfoDialog.vue';

    export default {

      name: "DashboardComponent",
      components: {
        DrinkInfoDialog
      },
  
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
},

      data: () => ({
        items: [],
        selectedIngredients: [],
        matchingDrinks: [],
        isDialogOpen: false,
        selectedDrink: "",
        drinkInfo: [],
        userEmail: ""
      }),
      mounted() {
        this.getIngredients();
      },
      
      methods: {
        getDrinkInfo(drinkName) {
            axios.get('/api/DrinkRecipe/GetDrinkRecipe', {
                params: {
                    drinkName: drinkName
                }
            }).then(response => {
                this.drinkInfo = response.data;
            });
          },
        showDrinkInfoDialog(drinkName) {
            this.selectedDrink = drinkName;
            console.log(this.selectedDrink);
            try {
              this.userEmail = auth.currentUser.email;
            }
            catch (error) {
              this.userEmail = "No User Logged In";
            }
            console.log(this.userEmail);
            this.isDialogOpen = true;
          },
        logWorking() {
              console.log("working");
            },
            selectIngredient(ingredient) {
              this.selectedIngredients.push(ingredient);
            },
            closeDrinkInfoDialog() {
              this.isDialogOpen = false;
            },
            getIngredients() {
              axios.get("api/DrinkRecipe/GetIngredients").then(response => {
                this.items = response.data;
              });
              
            },

            getDrinksFromIngredients() {
              let ingredientsList = "(";
              for (let i = 0; i < this.selectedIngredients.length; i++) {
                ingredientsList += "'" + this.selectedIngredients[i].ingredientName + "'";
                if (i != this.selectedIngredients.length - 1) {
                  ingredientsList += ", ";
                }
              }
              ingredientsList += ")";
              console.log(ingredientsList);
              axios.get("api/DrinkRecipe/GetDrinkFromIngredients", {
                params: {
                  ingredients: ingredientsList     
                }        
              }).then(response => {
                this.matchingDrinks = response.data;
                console.log(response.data);
              });
            },
        },
    }
  </script>