

<template>
    <div>
        <h3>전역에 등록한 컴포넌트 사용</h3>
        <BasicComponent/>
    </div>
  

  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import BasicComponent from './components/views/01_생성이용/01_BasicComponent.vue';

export default{
  name:"App"
  ,components:{BasicComponent}
}



</script>


<style >


</style>
