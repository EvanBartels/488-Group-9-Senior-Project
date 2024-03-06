<template>
    <br>
    <h1 class="text-h2" style="text-align: center; color: #0F4C75; font-family: sans-serif; font-weight: lighter;">Drink List</h1>
    <div class="d-flex align-center justify-center">
        
        </div> 
        <br>
        <div>
<DrinkList />
    </div>

</template>

<script>
import DrinkList from '../components/DrinkList.vue';
import DrinkInfoDialog from '../components/DrinkInfoDialog.vue';
export default {
    components: {
        DrinkInfoDialog,
        DrinkList
    }
}
</script>