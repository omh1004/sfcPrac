<template>
    <div>
        <h3>세번째 자식 컴포넌트</h3>
        <p>parentData : {{ parentData }}</p>
        <input type="text" v-model="parentData">
    </div>
</template>
<script>
export default {
    name:"thirdchild",
    inject:["parentData"],
}
</script>
<style>
    
</style>