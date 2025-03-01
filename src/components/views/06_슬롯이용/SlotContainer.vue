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
    </div>
</template>
<script>

import ChildSlotComponent from '@/components/views/06_슬롯이용/01_ChildSlotComponent.vue';

export default {
    name:'slotContainer'
    ,components:{ChildSlotComponent}
    ,methods:{
        clickHandler: function(){
            console.log('자식에서 부모 클릭이벤트 실행 ')
        }
    }
}
</script>
<style>
    
</style>