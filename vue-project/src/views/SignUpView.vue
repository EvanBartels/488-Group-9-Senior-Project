<template>
  <br>
  <h1 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">Sign Up</h1>
  <div class="d-flex align-center justify-center">
      
      </div> 
      <br>
      <div>
<Register></Register>
  </div>
  <br>
  <div>
    <FooterFile></FooterFile>
  </div>

</template>

<script>
import FooterFile from '../components/FooterFile.vue';
import Register from '../components/Register.vue';
export default {
  components: {
      Register,
      FooterFile
  }
}
</script>