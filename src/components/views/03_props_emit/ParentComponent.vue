<template>
    <div>
        <h2>자식 컴포넌트에 props로 데이터 전송하기</h2>
        <PropChildComponent mydata="하이이이이" number="19"/>
        <PropChildComponent mydata="하이룽" number="20"/>

        <h3>model데이터와 연동하여 데이터전송하기</h3>
        <p>
            v-bind:, :속성명으로 이용해서 전달할 수 있음<br>
            모든 타입의 자료형을 전달가능하다 (기본, 객체 ,배열 등 )
        </p>
        <PropChildComponent2 :objectList="objectList"  :number="number" :object="object" :objData="objData" />
    </div>
</template>
<script>
import PropChildComponent from './PropChildComponent.vue';
import PropChildComponent2 from './PropChildComponent2.vue';

const model ={
    mydata:"제목입니다."
    ,number:123
    ,objectList:[
        {name:"국어",teacher:"이근갑",score:12}
        ,{name:"수학",teacher:"정승제",score:13}

    ]
    ,object:{name:"",teacher:"",score:0}
    ,    objData:{no:1,title:"첫번째 제목",content:"첫번째 내용",date:new Date()},
    //MyPropChildComponent를 만들어서 아래 데이터로 테이블을 완성하기
    objDataList:[
        {no:1,title:"첫번째 제목",content:"첫번째 내용",date:new Date()},
        {no:2,title:"두번째 제목",content:"두번째 내용",date:new Date()},
        {no:3,title:"세번째 제목",content:"세번째 내용",date:new Date()},
        {no:4,title:"네번째 제목",content:"네번째 내용",date:new Date()}
    ],
}


export default {
    name:"parentComponent"
    ,data(){
        return model
    }
    ,components:{PropChildComponent,PropChildComponent2}
}
</script>
<style>
    
</style>