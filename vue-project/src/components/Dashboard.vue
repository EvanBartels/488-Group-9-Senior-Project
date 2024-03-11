  <template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">

          <div class="card">
            <div v-if="user.loggedIn">
              <div class="card-header" style ='text-align: center;'>Welcome, {{user.data.displayName}}!</div>
              <div class="card-header" style ='text-align: center; margin-bottom: 20px;'>{{user.data.email}}</div>
              <div class="card-body">
                <div class="alert alert-success" role="alert" style='text-align: center;'>
                  <div style='margin-bottom: 20px;'>You are logged in!</div>
                  <p>
                    <v-btn @click="$router.push('/drink-creation')" variant="outlined"   class="text-h6" elevation=10 style="min-height: 60px; min-width: 200px; border-width: 1.5px;" >Create Drink <v-icon> mdi-glass-cocktail</v-icon></v-btn>
                  </p>
                    <div class="my-4">
                      <v-btn  @click.prevent="signOut" class="btn btn-primary">Log Out</v-btn>
                    </div>

                    <div>
                      <v-card class="mx-5">
                        <v-list enabled>
                          <v-list-subheader>Your Favorited Drinks</v-list-subheader>
                            <v-list-item v-for="(item, index) in drinkList" :key="index" @click="showDrinkInfoDialog(item.drinkName)">
                              <v-list-item-title v-text="item.drinkName"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                      </v-card>
                    </div>
                    <DrinkInfoDialog v-if="isDialogOpen" :drinkName="selectedDrink" :userEmail="userEmail" @close="closeDrinkInfoDialog" />
                    
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
  
  <script>
  import { useStore} from "vuex";
  import { useRouter } from "vue-router";
  import {computed} from "vue";
  import { auth } from '../firebaseConfig'

  import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
  import axios from 'axios'
  
  
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
            drinkList: [],
            matchingDrinks: [],
            isDialogOpen: false,
            selectedDrink: "",
            drinkInfo: [],
            userEmail: ""
        }),
        mounted() {
            this.userEmail = this.user.email;
            this.getFavoriteDrinks();
        },
        methods: {
            getFavoriteDrinks() {
              let userEmail = "";
              userEmail = auth.currentUser.email;
              if (userEmail == null) {
                userEmail = "No User Logged In";
              }
              else {
                axios.get('/api/FavoriteDrink/GetFavoriteDrinks', {
                  params: {userEmail: userEmail}
                }) 
                .then(response => {
                    this.drinkList = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
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
  
  };
  </script>