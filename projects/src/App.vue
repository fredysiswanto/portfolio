<template>
  <header-component />
  <main-component />
  <footer-component />
  <router-view></router-view>
</template>
<script>
  import HeaderComponent from "./components/template/HeaderComponent.vue";
  import MainComponent from "./components/template/MainComponent.vue";
  import FooterComponent from "./components/template/FooterComponent.vue";

  export default {
    name: "App",
    components: { HeaderComponent, FooterComponent, MainComponent },
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
