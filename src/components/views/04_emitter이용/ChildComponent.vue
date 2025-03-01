<template>
    <div class="container">
        <h3>자식컴포넌트</h3>
        <p>
            자식컴포넌트에서 $emit()함수를 이용해서 , 부모컴포넌트에 데이터를 전송할 수 있다.<br>
            $emit()함수는 특정태그의 이벤트핸들러로 호출<br>
            $emit("이벤트명",이벤트핸들러의 인자값 설정) 함수 : 이벤트를 발생시키는 함수 
        </p>

        <h3>input태그에 입력된 값 전달하기 </h3>
        <input type="text" @input="$emit('basicEvent',$event.target.value)"/>

        <h3>button태그에 발생한 이벤트 전달</h3>
        <button @click="$emit('btnEvent',$event)">전송하기</button>

        <!-- <h3>이벤트객체, 추가값을 전달하기 (다수)</h3>
        <input type="text" @input="$emit('allDataEvent',$event,$event.target.value)"/> -->


        <h4>model데이터와 연동할 값 전달하기</h4>
        <button @click="modelDataSend">전달하기</button>

    </div>
</template>
<script>


import {generatorNum} from '@/resources/datasource.js';

const sequenceNum= generatorNum("board")

export default {
    name:'childEmitcomponent'
    ,data(){
        return {
            objArrData:[
            {no:sequenceNum.next().value,title:"첫번째제목",content:"첫번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"두번째제목",content:"두번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"세번째제목",content:"세번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"네번째제목",content:"네번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"다섯번째제목",content:"다섯번째 내용",date:new Date()},
            ],
            board:{no:0,title:"",content:"",date:""},
        }
    }
    ,methods:{
        modelDataSend :function(){
            this.$emit('modelDataEvent',this.objArrData);
        }
    }

}
</script>
<style>
    
</style>