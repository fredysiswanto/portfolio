<template>
  <div>
    <menu-component></menu-component>
  </div>
</template>

<script>
import MenuComponent from "./MenuComponent.vue";
export default {
  name: "HeaderComponent",
  props: {
    msg: String,
  },
  components: { MenuComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
