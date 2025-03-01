<template>
    <div>
        <h3>두번째 자식 컴포넌트</h3>
     
        <ul>
            <li v-for="n in names">{{ n }}</li>
        </ul>
        <ThirdChildComponent/>
    </div>
</template>
<script>
import ThirdChildComponent from './ThirdChildComponent.vue';

export default {
    name:"secondchild",
    components:{ThirdChildComponent},
    inject:["names"]
}
</script>
<style>
    
</style>