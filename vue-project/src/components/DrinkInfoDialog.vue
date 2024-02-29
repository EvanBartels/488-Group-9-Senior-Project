<template>
    <div class = "modal-backdrop">
        <v-card class="modal">
            <header class="model-header">
                <slot name = "header">
                <v-card-text>{{ drinkName }}<v-btn style="width: 1em;" @click="close"><v-icon>mdi-close</v-icon></v-btn></v-card-text>
            </slot>
            
        </header>
        <section class = "modal-body">
            <slot name="body">
                <v-card-title>Ingredients:</v-card-title> <!--//TODO: Carter, this is where the ingredients will be displayed !-->
                <v-list>
                    <v-list-item v-for="(item, index) in drinkInfo" :key="index">
                        <v-list-item-title v-text="item.ingredientName"></v-list-item-title>
                    </v-list-item>
                    </v-list>
            </slot>
            <v-btn @click="addFavoriteDrink(userEmail, drinkName)">Add Favorite</v-btn> <!--This should not show up for those not logged in-->
        </section>
        </v-card>
    </div>
    
</template>
<script>
    import axios from 'axios'
    export default {
        name: "DrinkInfoDialog",
        props: {
            drinkName: {
                type: String,
                default: "Drink Name"
            },
            userEmail :{
                type: String,
                default: "No User Logged In"
            }
        },

        methods: {
            close() {
                this.$emit('close');
            },
            getDrinkInfo(drinkName) {
            axios.get('/api/DrinkRecipe/GetDrinkRecipe', {
                params: {
                    drinkName: drinkName
                }
            }).then(response => {
                this.drinkInfo = response.data; //TODO: Carter, this response.data is a JSON with ingredient name, ratio, and abv, display it on the popup please
            });
            },
            addFavoriteDrink(userEmail, drinkName) { //TODO FIX THIS
                console.log(userEmail)
                if (userEmail == "No User Logged In") {
                    console.log("No user logged in");
                }
                else {
                    axios.get('/api/FavoriteDrink/AddFavoriteDrink',{
                        params: {
                            drinkName: drinkName,
                            userEmail: userEmail
                        }
                    }).then(response => {
                        console.log("Drink added to favorites");
                    })
                    .catch(error => {
                        console.log("Error adding drink to favorites");
                    })
                }
            }

            
        },
        mounted() {
            this.getDrinkInfo(this.drinkName);
        },
        data: () => ({
            drinkInfo: []
        })
    
    }
</script>
<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #21292d;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    background: #102b3d;
    border: solid 1px #102b3d;
    border-radius: 30px;
    overflow-x: auto;
    padding: 20px;
}
</style>