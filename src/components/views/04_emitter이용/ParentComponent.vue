<template>
    <div>
        <ChildComponent @basicEvent="inputHandler" 
                        @btnEvent="btnEventHandler"
                        @allDataEvent="allDataHandler"    
                        @modelDataEvent="modelDataHandler"      
        />
    </div>
</template>
<script>

import ChildComponent from './ChildComponent.vue';

const model = {
    childData:''
}


export default {
    name:'parentComponent'
    ,emits:["basicEvent","eventObjEvent","allDataEvent","modelDataEvent"],
    components:{ChildComponent}
    ,methods:{
        inputHandler:function(v){
            console.log(v);
            this.childData=v;
        },
        btnEventHandler:function(e){
            console.log(e);

        },
        allDataHandler:function(e,v){
            console.log(e);
            console.log(v);
        },
        modelDataHandler(objList){
            console.log(objList);
            this.childObjList= objList;
        }
        
    }
    ,data(){
        return {
            childObjList:[]
            ,childData:''
        }
    }
}
</script>
<style>
    
</style>