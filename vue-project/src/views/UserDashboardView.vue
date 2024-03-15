<template>
    <br>
    <h1 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">Dashboard</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
  <Dashboard></Dashboard>
    </div>
    <br />
  <FooterFile></FooterFile>
  
  </template>
  
  <script>
  import Dashboard from '../components/Dashboard.vue';
  import FooterFile from '../components/FooterFile.vue';

  export default {
    components: {
        Dashboard,
        FooterFile
    }
  }
  </script>