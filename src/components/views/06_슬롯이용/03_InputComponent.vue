<template>
    <div>
        <label for="">
            <input type="checkbox" v-model="check" :value="title">{{ title }}
        </label>
    </div>
</template>
<script>
export default {
    name:'InputComponent'
    ,props:["title"]
    ,data(){
        return{check:false}
    }
}
</script>
<style>
    
</style>