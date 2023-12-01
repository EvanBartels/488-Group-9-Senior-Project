<template>
  <div>
    <h1><i>Welcome to your online Cocktail Mixer!</i></h1>
    <img src="/relaxing-cocktails.jpg" alt="cocktail" class="responsive-image">
    <p>
      <v-btn @click="$router.push('/drink-creation')" variant="outlined"   class="text-h6" elevation=10 style="min-height: 60px; min-width: 200px; border-width: 1.5px;" >Create Drink <v-icon> mdi-glass-cocktail</v-icon></v-btn>
    </p>
    <p>You are just moments away from creating your own mixed drink! You can either
      <router-link to="/register"> sign-up here </router-link>
      or 
      <router-link to="/drink-creation"> create a drink now. </router-link>
    </p>
    <p>Returning user? 
      <router-link to="/login"> Login here!</router-link>
    </p>
    <slot name="text"></slot>
  </div>
  
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>

.responsive-image {
  width: 100%;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 20px;
}
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
  font-family: Verdana, sans-serif;
}

p {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  font-family: sans-serif;
}
</style>