<template>
  <div> 
 
    <h2>Hola</h2>
   <!-- <router-view></router-view> -->
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
