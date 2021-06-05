<template>
  <div>
      
    <li class="c-sidebar-nav-item">
      <a class="c-sidebar-nav-link c-active">
        <i class="c-sidebar-nav-icon cil-home"></i>Home
      </a>
    </li>
    <li class="c-sidebar-nav-item">
      <a class="c-sidebar-nav-link c-active" href="costumers">
        <i class="c-sidebar-nav-icon cil-user text-white"></i>Clientes
      </a>
    </li>
    <li class="c-sidebar-nav-item">
      <a class="c-sidebar-nav-link c-active" href="producto">
        <i class="c-sidebar-nav-icon cil-cart"></i>Productos
      </a>
    </li>
    <li class="c-sidebar-nav-item">
      <a class="c-sidebar-nav-link c-active" href="#">
        <i class="c-sidebar-nav-icon cil-calendar"></i>Citas
      </a>
    </li> 
  </div>
</template>
<script>
export default {
    created() {      
    },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route;
    }
  }
};
</script>

<style></style>
