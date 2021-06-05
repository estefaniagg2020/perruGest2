<template>
  <div>
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-md-down-none">
        <img src="assets/img/logog.png" alt="" width="110" class="c-sidebar-brand-full">
        <!-- <img src="https://infyom.com/images/logo/logo_236w.png" width="46"
             class="c-sidebar-brand-full" alt="Brand Logo">
        <img src="https://infyom.com/images/logo/blue_logo_150x150.png" width="46" height="46"
             class="c-sidebar-brand-minimized" alt="Brand Logo"> -->
    </div>
    <ul class="c-sidebar-nav">
       <menuComponent/>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; height: 692px; right: 0px;">
            <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 369px;"></div>
        </div>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
</div>

  </div>
</template>

<script>
import menuComponent from './menuComponent.vue'
export default {
  component:{
    menuComponent
  },
  created() {},
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route;
    }
  }
};
</script>

<style></style>
