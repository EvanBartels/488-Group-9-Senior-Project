<template>
    <br>
    <h1 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">Drink List</h1>
    <div class="d-flex align-center justify-center">
        
    </div> 
    <br>
    <div>
            <DrinkList />
            <br>
            <FooterFile></FooterFile>
    </div>
    

</template>

<script>
import DrinkList from '../components/DrinkList.vue';
import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
import FooterFile from '../components/FooterFile.vue';

export default {
    components: {
        DrinkInfoDialog,
        DrinkList,
        FooterFile
    }
}
</script>