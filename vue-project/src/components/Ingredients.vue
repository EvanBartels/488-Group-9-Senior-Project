<template>
  
    <div class="card">
      <div v-if="user.loggedIn">
        <div class="card-body">
          <div class="card-header" style="text-align: center">Select your ingredients and press the save button to save your common ingredients for next time you use the site!</div>
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
                @click="selectIngredient(item);"
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
        <v-btn @click="saveMultipleIngredients(); $router.push('/Dashboard')">Save Ingredients</v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import { useStore} from "vuex";
import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '../firebaseConfig'
//import DrinkInfoDialog from './DrinkInfoDialog.vue';

export default {

  name: "IngredientsComponent",

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
    userEmail: "",
  }),
  mounted() {
    this.getIngredients();
  },
  
  methods: {

        selectIngredient(ingredient) {
          this.selectedIngredients.push(ingredient);
        },
        getIngredients() {
          axios.get("api/DrinkRecipe/GetIngredients").then(response => {
            this.items = response.data;
          });
          
        },

        saveMultipleIngredients() {
                //Goal: for every selected item in selectedIngredients, save the ingredient to the user's saved ingredients database
                let userEmail = "";
                userEmail = auth.currentUser.email;
                if (userEmail == null) {
                    console.log("No user logged in");
                }
                else {
                    //remove all of the user's saved ingredients
                    axios.delete('/api/Ingredient/RemoveAllSavedIngredients', {
                        params: {
                            userEmail: userEmail
                        }
                    }).then(response => {
                        console.log("All ingredients removed");
                    })
                    .catch(error => {
                            console.log("Error removing ingredients");
                    })

                    //replace with new saved ingredients
                    let ingredientName = "";
                    for (let i = 0; i < this.selectedIngredients.length; i++) {
                        ingredientName = this.selectedIngredients[i].ingredientName;
                        axios.get('/api/Ingredient/SaveIngredientsFromSelectedIngredients',{
                        params: {
                            userEmail: userEmail,
                            ingredient: ingredientName
                        }
                        }).then(response => {
                            console.log("Ingredient saved");
                        })
                        .catch(error => {
                            console.log("Error saving ingredient");
                        })
                    }
                    
                }
            },          
            
    },

}
</script>