<template>
  <div class="header">
    <nav-component></nav-component>
    <h1>ini header</h1>
  </div>
</template>

<script>
import NavComponent from "./NavComponent.vue";
export default {
  components: { NavComponent },
  name: "Header",
  scope: {
    msg: String,
  },
};
</script>