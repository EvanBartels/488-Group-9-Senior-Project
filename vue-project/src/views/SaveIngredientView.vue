<template>
    <br>
    <h1 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">Save Ingredients</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
  <Ingredients></Ingredients>
    </div>
    <br />
  <FooterFile></FooterFile>
  
  </template>
  
  <script>
  import Ingredients from '../components/Ingredients.vue';
  import FooterFile from '../components/FooterFile.vue';

  export default {
    components: {
        Ingredients,
        FooterFile
    }
  }
  </script>