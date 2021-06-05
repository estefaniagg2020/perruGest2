<template>
  <div>
    <router-link to="home">
      <li class="c-sidebar-nav-item">
        <a class="c-sidebar-nav-link c-active" href="">
          <i class="c-sidebar-nav-icon cil-home"></i>Home
        </a>
      </li>
    </router-link>
    <router-link to="costumers">
      <li class="c-sidebar-nav-item">
        <a class="c-sidebar-nav-link c-active" href="">
          <i class="c-sidebar-nav-icon cil-user text-white"></i>Clientes
        </a>
      </li>
    </router-link>
    <router-link to="product">
      <li class="c-sidebar-nav-item">
        <a class="c-sidebar-nav-link c-active" href="">
          <i class="c-sidebar-nav-icon cil-cart"></i>Productos
        </a>
      </li>
    </router-link>
    <router-link to="date">
    <li class="c-sidebar-nav-item">
      <a class="c-sidebar-nav-link c-active" href="#">
        <i class="c-sidebar-nav-icon cil-calendar"></i>Citas
      </a>
    </li>
 </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
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
