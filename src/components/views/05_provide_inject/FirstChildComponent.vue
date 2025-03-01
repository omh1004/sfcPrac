<template>
    <div>
        <SecondChildComponent/>
    </div>
</template>
<script>
import SecondChildComponent from './SecondChildComponent.vue';



export default {
    name:"fistChildComponent"
    ,components:{SecondChildComponent}
}
</script>
<style>
    
</style>