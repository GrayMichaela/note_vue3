<script setup lang="ts">
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
</script>

<template>
    <h2>flex</h2>
    <div class="w100 flex">
        <div class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 10" :key="i">{{ i }}</div>
    </div>
    <span class="w100 flex-inline">
        <span class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 10" :key="i">{{ i }}</span>
    </span>
    <h2>flex-direction</h2>
    <div class="w100 flex flex-fd-row">
        <span class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 10" :key="i">{{ i }}</span>
    </div>
    <div class="w100 flex flex-fd-rr">
        <span class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 10" :key="i">{{ i }}</span>
    </div>
    <div class="w100 flex flex-fd-column">
        <span class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 5" :key="i">{{ i }}</span>
    </div>
    <div class="w100 flex flex-fd-cr">
        <span class="item" :style="{backgroundColor:getRandomColor()}" v-for="i in 5" :key="i">{{ i }}</span>
    </div>
</template>
<style lang="less" scoped>
.w100{
    width: 100%;
    border-top: 1px solid var(--border-color);
    padding: 10px 0;
}
.item{
    width: 100px;
    height: 100px;
    color:#fff;
}
h2{
    color: var(--font-color);
}
</style>