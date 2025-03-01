<template>
    <div>
        <h3>부모에서 전달된 태그 슬롯 가져오기 </h3>
        <slot></slot>

        <h4>전달된 템플릿 반복출력하기</h4>
        <ul>
            <li v-for="n in 5">
                <slot></slot>
            </li>
        </ul>

        <h3>props로 값 전달받아서 , slot과 같이 이용하기</h3>
        <ul>
            <li v-for="n in count">
                <slot></slot>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    name:'childSlotComponent'
    ,props:["count"]
}
</script>
<style>
    
</style>