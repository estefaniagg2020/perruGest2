<template>
  <div class="">
    <SidebarComponent class="col-auto" />
    <div class="col-12">
      <HeaderComponent />
    </div>

    <div class="main">
      <main class="col-10 body-main">
        <transition name="fade" mode="out-in">
          <HomeComponent v-if="this.$route.path == '/home'"/>
          <ClientesComponent v-if="this.$route.path == '/costumers'"/>
          <DateComponent v-if="this.$route.path == '/date'"/>
        </transition>
      </main>
    </div>
    <!-- <TheFooter/> -->
  </div>
</template>

<script>
import HomeComponent from "./HomeComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import ClientesComponent from "./ClientesComponent.vue";
import DateComponent from "./DateComponent.vue";
export default {
  components: {
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    ClientesComponent,
    DateComponent
  },
  created() {
    console.log(this.$route.path);
  }
};
</script>
<style>
.main{
    padding:0;
    margin:0;
}
.body-main {
    padding:0;
    margin:0;
  margin-left: 264px;
  margin-top: -141px;
}
</style>
