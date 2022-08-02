<template>
  <div id="app">
    <HelloWorld/>
    <BgMusic/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BgMusic from './components/BgMusic.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BgMusic,
  }
}
</script>

<style>
#app {
  font-family: jinkaiFont, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 100px;
  margin-right: 100px;
  /* border: 1px dashed #ccc; */
}
</style>
