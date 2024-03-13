<template>
    <div>
        <v-switch
    :label="switchLabel"
    indeterminate
    inset
    v-model="switchValue"
    @change="toggleAlcoholicDrinks"
  ></v-switch>
      <v-card class="mx-5">
       <v-list enabled>
       <v-list-subheader>{{switchLabel}}</v-list-subheader>
       <v-list-item v-for="(item, index) in drinkList" :key="index" @click="showDrinkInfoDialog(item.drinkName)">
        <v-list-item-title v-text="item.drinkName"></v-list-item-title>
        </v-list-item>
       </v-list>
      </v-card>
    </div>
    <DrinkInfoDialog v-if="isDialogOpen" :drinkName="selectedDrink" :userEmail="userEmail" @close="closeDrinkInfoDialog" />
</template>
<script>
    import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
    import { useStore} from "vuex";
    import { useRouter } from "vue-router";
    import {computed} from "vue";
    import { auth } from '../firebaseConfig'
    import axios from 'axios'

    export default
    {
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
            drinkList: [],
            alcoholicDrinks: [],
            nonAlcoholicDrinks: [],
            matchingDrinks: [],
            isDialogOpen: false,
            selectedDrink: "",
            drinkInfo: [],
            userEmail: "",
            switchLabel: "All Drinks",
        }),
        mounted() {
            this.userEmail = this.user.email;
            this.getAllDrinks();
            this.getNonAlcoholicDrinks();
            this.getAlcoholicDrinks();
        },
        methods: {
            getAllDrinks() {
                axios.get('/api/DrinkRecipe/GetAllDrinks')
                .then(response => {
                    this.drinkList = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            getNonAlcoholicDrinks() {
                axios.get('/api/DrinkRecipe/GetNonAlcoholicDrinks')
                .then(response => {
                    this.nonAlcoholicDrinks = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            getAlcoholicDrinks() {
                axios.get('/api/DrinkRecipe/GetAlcoholicDrinks')
                .then(response => {
                    this.alcoholicDrinks = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            toggleAlcoholicDrinks() {
                if (this.switchValue) {
                    this.drinkList = this.alcoholicDrinks;
                    this.switchLabel = "Alcoholic Drinks"
                }
                else {
                    this.drinkList = this.nonAlcoholicDrinks;
                    this.switchLabel = "Non-Alcoholic Drinks"
                }
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
            closeDrinkInfoDialog() {
                this.isDialogOpen = false;
            }
            
        }
    }
</script>