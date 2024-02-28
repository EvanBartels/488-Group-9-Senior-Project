<template>
    <br>
    <h1 class="text-h2" style="text-align: center; color: #0F4C75; font-family: sans-serif; font-weight: lighter;">Drink Creation</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
<IngredientSelector></IngredientSelector>
    </div>

</template>

<script>
import IngredientSelector from '../components/IngredientSelector.vue';
import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
export default {
    components: {
        IngredientSelector,
        DrinkInfoDialog
    }
}
</script>