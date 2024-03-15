<template>
    <br>
    <h1 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">User Settings</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
  <Settings></Settings>
    </div>
    <br />
  <FooterFile></FooterFile>
  
  </template>
  
  <script>
  import Settings from '../components/Settings.vue';
  import FooterFile from '../components/FooterFile.vue';
  export default {
    components: {
        Settings,
        FooterFile
    }
  }
  </script>