<template>
    <div>
        <div>
            <slot name="test"/>
        </div>
        <div>
            <slot name="test1"/>
        </div>
        <div>
            <slot name="checkbox"/>
        </div>
    </div>
</template>
<script>
export default {
    name:"NamedSlotComponent"
}
</script>
<style>
        .test1{
        display: flex;
    }
    .test1>div{
        width:40%;
        border:1px solid red;
        height:200px;
    }
</style>