<template>
  <div><h2>Hola</h2>   
    <router-link to="/costumers">
        
            <a class="c-sidebar-nav-link c-active" href="#">
                <i class="c-sidebar-nav-icon cil-user text-white"></i>Clientes
            </a>
        
    </router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    created() {
       console.log(this.$route)
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
