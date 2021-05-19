<template>
  <header-component msg="ini header component"/>
  <footer-component msg="ini Footer Compoentn" ></footer-component>
</template>

<script>
import FooterComponent from './components/template/FooterComponent.vue'
import HeaderComponent from './components/template/HeaderComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent

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
}
</style>
