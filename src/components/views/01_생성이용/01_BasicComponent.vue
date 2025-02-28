<template>
    <div class="container">
        <h3>{{ inputData }}</h3>
    </div>
</template>
<script>
export default {
    name:"BasicComponent"
    ,data(){
        return {
            inputData:'써보자!s'
        }
    }
}
</script>
<style>
    .container{
        border:1px solid magenta;
        padding:3%;
    }
</style>