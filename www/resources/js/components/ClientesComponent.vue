<template>
   <div>
       <h3>Lista de clientes</h3>
    <b-table striped hover :items="itemsClientes.items"></b-table>
  </div>
</template>

<script>
import Vue from "vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    data() {
      return {
        // items: [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        // ]
      }
    },
    created()
    {
     this.getCostumers();
    
    },
    
   computed: mapState({
    itemsClientes: (state) => state.costumerModules,
    // usersProfile: (state) =>
    //   state.usersModel.items.filter((user) => user.class != "Client"),
    // profiles: (state) => state.profilesModel.items,   
    // users: (state) => state.budgetsModel.users,
    
  }),
  methods: {
     ...mapActions("costumerModules", ["getCostumers"]),
  },

}
</script>

<style>

</style>