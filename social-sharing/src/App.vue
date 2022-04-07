<template>
  <img alt="Vue logo" src="./assets/logo.jpg">
  <h1>Social sharing page</h1>
  <p>sharing vue js post/story on social media using vue-social-sharing</p>
  <social/>
</template>

<script>
import social from './components/social.vue'

export default {
  name: 'App',
  components: {
    social
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
