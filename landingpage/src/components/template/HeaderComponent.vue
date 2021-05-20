<template>
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <a class="logo" href="index.html">
        <span class="logo-light-mode">
          <img
            src="assets/img/logo/SVG/logo_dark.svg"
            class="l-dark"
            height="34"
            alt=""
          />
          <img
            src="assets/img/logo/SVG/logo_white.svg"
            class="l-light"
            height="34"
            alt=""
          />
        </span>
        <img
          src="assets/img/logo-light.png"
          height="24"
          class="logo-dark-mode"
          alt=""
        />
      </a>
      <!-- <div class="buy-button">
        <a href="https://1.envato.market/4n73n" target="_blank">
          <div class="btn btn-primary login-btn-primary">Buy Now</div>
          <div class="btn btn-light login-btn-light">Buy Now</div>
        </a>
      </div> -->
      <!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <nav-component></nav-component>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
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