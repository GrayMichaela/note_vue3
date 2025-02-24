<script setup lang="ts">
import {reactive} from 'vue'
// const list=reactive(Array(10).fill(7).map((v,i)=>Math.round(Math.random()*i*1000)))
</script>

<template>
    <div class="base">
        <div class="prePage"></div>
        <div class="nextPage"></div>
        <div class="pre"></div>
        <div class="next"></div>
    </div>
</template>
<style lang="less" scoped>
@defDeg:3deg;
.base{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
::v-deep{
    @keyframes fanshutoLeft {
        0%{
            z-index: 2;
        }
        100%{
            z-index: 2;
            transform: skewY(-90deg) rotateY(90deg);
        }
    }
    @keyframes fanshutoRight {
        0%{
            z-index: 2;
        }
        100%{
            z-index: 2;
            transform: skewY(@defDeg) rotateY(0);
        }
    }
}
.pre,.next,.nextPage,.prePage{
    cursor: pointer;
    width: 30%;
    margin-bottom: 50px;
    height: 80%;
    position: absolute;
    bottom: 0;
    flex-shrink: 0;
    transform-origin: right center;
    box-shadow: 0 0 5px #000;
}
.nextPage{
    z-index:1 ;
    background-color: aquamarine;
    right: 50%;
    transform: skewY(@defDeg);
}
.prePage{
    z-index:1 ;
    background-color:chocolate;
    left: 50%;
    transform-origin: left center;
    transform: skewY(-@defDeg);
}
.pre{
    background-color: cadetblue;
    animation: fanshutoLeft .5s linear 1;
    transform-origin: left center;
    left: 50%;
    transform: skewY(-@defDeg);
}
.next{
    right: 50%;
    transform: skewY(90deg) rotateY(90deg);
    background-color:cadetblue;
    
    animation: fanshutoRight .5s linear 1;
    animation-delay: .5s;
    transform-origin: right center;
}
</style>
