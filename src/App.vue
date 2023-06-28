<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import './css/com.css'
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
