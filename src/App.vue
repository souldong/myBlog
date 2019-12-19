<template>
  <div id="app">
      <layout></layout>
  </div>
</template>

<script>
import layout from './views/layout/index';
export default{
  components:{
    layout
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
