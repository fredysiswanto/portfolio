<template>
  <Header></Header>
  <Content></Content>
  <Footer></Footer>
</template>

<script>
  import Header from "./components/template/HeaderComponent.vue";
  import Content from "./components/template/ContentComponent";
  import Footer from "./components/template/FooterComponent.vue";
  export default {
    name: "App",
    components: {
      Header,
      Content,
      Footer,
    },
  };
</script>
