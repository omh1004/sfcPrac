<template>
    <div>
        <h3>slot태그란</h3>
        <p>
            자식컴포넌트에 부모컴포넌트가 template데이터를 전송하는 기능<br> 
            부모가 전달한 template을 자식컴포넌트는 slot태그를 이용하여 출력<br>
        </p>
        <div>
            <ChildSlotComponent :count="5">
                <button @click="clickHandler" >버튼전달 </button>
            </ChildSlotComponent>
        </div>

        <h3>컴포넌트 전달하기</h3>
        <ChildSlotComponent2>
            <InputComponent :title="checkData"/>
        </ChildSlotComponent2>

        <h3>배열데이터를 이용해서 출력하기</h3>
        <ChildSlotComponent2>
            <InputComponent v-for="t in titleList" :title="t"/>
        </ChildSlotComponent2>

        <h3>이름있는 슬롯 이용하기 </h3>
        <p>
            이름있는 슬롯은 다수의 슬롯을 자식 컴포넌트에 전달하고, 이름으로 구분하여 원하는 위치에 쓸수 있게함 <br>
            이름있는 슬롯은 template 태그에 감싸서 보내야함 
        </p>
        <NamedSlotComponent>
            <template v-slot:test>
                <p>test슬롯</p>
            </template>
            <template v-slot:test1>
                <p>test1슬롯</p>
            </template>
            <template v-slot:checkbox>
                <InputComponent v-for="t in titleList" :title="t" />
            </template>
        </NamedSlotComponent>

        


    </div>
</template>
<script>

import ChildSlotComponent from '@/components/views/06_슬롯이용/01_ChildSlotComponent.vue';
import ChildSlotComponent2 from '@/components/views/06_슬롯이용/02_ChildSlotComponent.vue';
import InputComponent from '@/components/views/06_슬롯이용/03_InputComponent.vue'
import NamedSlotComponent from './NamedSlotComponent.vue';

const model={
    titleList:["운동","코딩","산책","영화"]
    ,checkData:'check컴포넌트'
    ,mylogo:"Mylogo"
    ,menu:[
                {title:"방명록",src:"angry.jpg"},
                {title:"갤러리",src:"babo.png"},
                {title:"일기",src:"heart.jpg"},
                {title:"자료실",src:"smile.jpg"},
    ]
}


export default {
    name:'slotContainer'
    ,components:{ChildSlotComponent,ChildSlotComponent2,InputComponent,NamedSlotComponent}
    ,methods:{
        clickHandler: function(){
            console.log('자식에서 부모 클릭이벤트 실행 ')
        }
    },data(){
        return model;
    }
}
</script>
<style>
    
</style>