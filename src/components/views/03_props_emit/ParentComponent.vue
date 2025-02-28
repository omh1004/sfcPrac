<template>
    <div>
        <h2>자식 컴포넌트에 props로 데이터 전송하기</h2>
        <PropChildComponent mydata="하이이이이", number="19"/>
        <PropChildComponent mydata="하이룽", number="20"/>

    </div>
</template>
<script>
import PropChildComponent from './PropChildComponent.vue';

const model ={
    mydata:"제목입니다."
    ,number:0
}


export default {
    name:"parentComponent"
    ,data(){
        return model
    }
    ,components:{PropChildComponent}
}
</script>
<style>
    
</style>