<template>
    <div>
        <h3>provide를 이용해서 공용데이터 제공하기 </h3>
        <p>{{ refData }}</p>
        <FirstChildComponent/>
    </div>
</template>
<script>
import FirstChildComponent from './FirstChildComponent.vue';
import FirstChildComponent from './FirstChildComponent.vue';
import {ref} from "vue";

export default {
    name:'provideParentComponent'
    ,components:{FirstChildComponent}
    ,data(){
        return {
            refData:'수정가능'
        }
    },
    provide:function(){
        return {
            parentData:ref(this.refData),
            names:['오민현','이순신','홍길동']
        }
    }
}
</script>
<style>
    
</style>