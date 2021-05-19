<template>
  <div class="home">
    <header-component></header-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../components/template/FooterComponent.vue";
import HeaderComponent from "../components/template/HeaderComponent.vue";

export default {
  name: "Home",
  components: { FooterComponent, HeaderComponent },
};
</script>
