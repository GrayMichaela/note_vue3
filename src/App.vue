<script setup lang="ts">
import {ref,computed} from 'vue'
import { RouterView ,RouterLink,useRoute} from 'vue-router'
import {menus} from '@/router'
const route=useRoute()
const searchValue=ref('')
const filterMenus=computed(()=>menus.filter(v=>{
  if(searchValue.value){
    // 搜name
    const isName=v.name.search(searchValue.value)>=0
    // 搜标题
    const isTitle= v?.meta.title.search(searchValue.value)>=0
    return isName||isTitle
  }
  else{
    return true
  }
}))
</script>
<template>
  <div id="root" class="light flex flex-ai-center flex-jc-center">
    <div id="menus">
      <input type="text" v-model.trim="searchValue" id="search"/>
      <RouterLink :to="{name:item.name}" :class="['menu flex flex-ai-center',route.name===item.name&&'menu-active']" v-for="item in filterMenus">{{ item?.meta.title||item.name }}</RouterLink>
    </div>
    <div class="item-fg1 item-as-stretch" id="content">
      <RouterView/>
    </div>
  </div>
</template>
<style lang="less" scoped>
#root{
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
}
#menus{
  width: 300px;
  height: 100%;
  overflow: auto;
  border-right: 1px solid var(--border-color);
  padding: 10px 0;
  box-sizing: border-box;
  .menu{
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    color:var(--font-color);
    font-size: var(--navigation-font-size);
    &-active,&:hover{
      background-color: rgba(255,255,255,0.4);
    }
    &:link{
      text-decoration: none;
    }
  }
  #search{
    position: sticky;
    top: 0;
    box-sizing: border-box;
    border-radius: 3px;
    padding:0 10px;
    font-size: var(--input-font-size);
    color: var(--input-color);
    border: none;
    width:90%;
    height: 50px;
    outline: none;
    display: block;
    margin: 0 auto;
  }
}
#content{
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}
</style>