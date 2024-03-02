<template>
    <br>
    <h1 class="text-h2" style="text-align: center; color: #0F4C75; font-family: sans-serif; font-weight: lighter;">Drink Creation</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
<IngredientSelector></IngredientSelector>
    </div>
    <br>
    <div>
<FooterFile></FooterFile>
    </div>

</template>

<script>
import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
import FooterFile from '../components/FooterFile.vue';
import IngredientSelector from '../components/IngredientSelector.vue';
export default {
    components: {
        IngredientSelector,
        DrinkInfoDialog,
        FooterFile
    }
}
</script>