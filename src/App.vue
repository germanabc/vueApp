<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 最顶层要渲染的组件 -->
    <!-- <router-view></router-view> -->
     <!-- <HelloWorld></HelloWorld> -->
    <router-view/>
    <!-- <gisMap/> -->
    <button v-on:click="add()">点击</button>
    
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld'
import gisMap from '@/components/map'




export default {
  name: 'App',
  components: {
    'HelloWorld': HelloWorld,
    'gisMap': gisMap,
  },
  methods:{
    add: ()=>{
      store.commit('increment')
      console.log(store.state.count)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
