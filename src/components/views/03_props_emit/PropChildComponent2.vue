<template>
    <div>
        <h3>부모가 전달한 model데이터 가져오기</h3>
        <div>
            <h4>기본자료형 데이터</h4>
            <p> number : {{ number }}</p>
            <p> objectList : {{ objectList}}</p>
            <p> object : {{ object }}</p>

            <h4>배열데이터 처리하기 </h4>
            <ul>
                <li v-for="(v,k) in objectList" :key="k">{{ v }}</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th v-for="(v,k) in objData" :key="k">{{ k }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="(v,k) in objData" :key="k">{{ v }}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>
<script>
export default {
    name:"propChildComponent2"
    ,props:["objectList","object","number","objData"]
}
</script>
<style>
    
</style>