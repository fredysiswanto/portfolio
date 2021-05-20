<template>
  <div id="navigation">
    <!-- Navigation Menu-->
    <ul class="navigation-menu nav-light">
      <router-link to="/" class="sub-menu-item">Home</router-link>
      <router-link to="/about" class="sub-menu-item">About</router-link>
      <router-link to="/projects" class="sub-menu-item">Projects</router-link>
      <router-link to="/contact" class="sub-menu-item">Contact</router-link>
    </ul>
    <!--end navigation menu-->
    <div class="menu-btn d-none">
      <a href="" target="_blank" class="btn btn-primary">Contact Now</a>
    </div>
    <!--end login button-->
  </div>
</template>


<script>
export default {
  name: "Nav",
};
</script>