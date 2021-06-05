<template>
  <div>
    <h1>clientes</h1>
      <clientesComponent></clientesComponent>
    </div>

</template>

<script>
import clientesComponent from "../components/ClientesComponent.vue";
export default {
  
  created(){
    console.log("componente cliente")
  },
  components: {
    clientesComponent
  },
  
};
</script>

<style></style>
