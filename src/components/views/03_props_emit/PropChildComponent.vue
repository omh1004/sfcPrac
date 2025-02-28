<template>
    <div>
        <h3>Prop를 이용하여 자식컴포넌트 구성</h3>
        <p>
            prop으로 받은 데이터는 model 데이터와 마찬가지로 사용가능 <br>
            export default{}에 props속성으로 설정을 해줘야 사용할 수 있음<br>
        </p>

        <h3>{{ mydata }}</h3>
        <h3>{{ number }}</h3>
    </div>
</template>
<script>
export default {
    name:"propChildCompoent"
    ,props:["mydata","number"]
}
</script>
<style>
    
</style>