

<template>
    <!-- <div>
        <h3>전역에 등록한 컴포넌트 사용</h3>
        <BasicComponent/>
    </div>
  
    <div>
      <h3>prop속성 사용하여 , 부모데이터를  자식컴포넌트에 전달</h3>
      <ParentComponent/>
    </div> -->
    <div>
      <h3>Emit속성을 이용하여, 자식태그의 데이터를 부모데이터에 전달 </h3>
      <EmitParentComponent/>
    </div>


    <div>
      <h3>slotcontainer</h3>
      <SlotContainer/>
    </div>

    
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import BasicComponent from './components/views/01_생성이용/01_BasicComponent.vue';
import ParentComponent from './components/views/03_props_emit/ParentComponent.vue';
import EmitParentComponent from './components/views/04_emitter이용/ParentComponent.vue';
import SlotContainer from './components/views/06_슬롯이용/SlotContainer.vue';


export default{
  name:"App"
  ,components:{BasicComponent, ParentComponent,EmitParentComponent,SlotContainer}
}
</script>
<style >


</style>
