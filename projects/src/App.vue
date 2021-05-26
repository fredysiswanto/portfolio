<template>
  <header-component> </header-component>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link>
  </div>
  <footer-component />
  <router-view />
</template>

<script>
  import FooterComponent from "./components/FooterComponent.vue";
  import HeaderComponent from "./components/HeaderComponent.vue";
  export default {
    components: { HeaderComponent, FooterComponent },
  };
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
