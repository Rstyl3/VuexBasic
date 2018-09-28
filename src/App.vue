<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: Ubuntu;
  color: #555;
  display: flex;
  flex-direction: column;
}
#nav{
  margin: 0 auto;
}
</style>
