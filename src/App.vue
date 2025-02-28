

<template>
    <div>
        <h3>전역에 등록한 컴포넌트 사용</h3>
        <BasicComponent/>
    </div>
  
    <div>
      <h3>prop속성 사용하여 , 부모데이터를  자식컴포넌트에 전달</h3>
      <ParentComponent/>
    </div>

  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import BasicComponent from './components/views/01_생성이용/01_BasicComponent.vue';
import ParentComponent from './components/views/03_props_emit/ParentComponent.vue';

export default{
  name:"App"
  ,components:{BasicComponent, ParentComponent}
}



</script>


<style >


</style>
