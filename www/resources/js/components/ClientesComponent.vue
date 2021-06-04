<template>
  <div>
    <div class="mb-4">
      <h3 class="d-inline-flex mr-4">Lista de clientes</h3>
      <b-button class="d-inline-flex" @click="show = !show"
        ><i class="cil-user-follow"></i
      ></b-button>
    </div>
    <b-table striped hover :items="itemsClientes.items" :per-page="perPage"
      :current-page="currentPage">
     hola
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <div class="row justify-content-center col-12">
      <div class="col-9 justify-content-center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-2"
            label="Nombre cliente:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Nombre"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Email :" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Teléfono:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.telf"
              placeholder="Teléfono"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Mascota:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name_pet"
              placeholder="Mascota"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Raza:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.breed_pet"
              :options="breeds"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Pelo:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.hair_pet"
              :options="hairs"
              required
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="show">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    
    return {
       perPage: 5,
       currentPage: 1,
      form: {
        email: "",
        name: "",
        telf: "",
        name_pet: "",
        breed_pet: null,
        hair_pet: null
      },
      breeds: [
        { text: "Raza", value: null },
        "Bulldog",
        "Chihuaha",
        "Yorkshire",
        "Pastor Alemán",
        "Mestizo"
      ],
      hairs: [
        { text: "Pelo", value: null },
        "Largo-fino",
        "Largo-grueso",
        "Corto",
        "Corto-fino",
        "Corto-grueso",
        "Sin definir"
      ],
      show: false
      // items: [
      //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
      // ]
    };
  },
  created() {
    this.getCostumers();
  },

  computed: mapState({
    itemsClientes: state => state.costumerModules
    // usersProfile: (state) =>
    //   state.usersModel.items.filter((user) => user.class != "Client"),
    // profiles: (state) => state.profilesModel.items,
    // users: (state) => state.budgetsModel.users,
  }),
  methods: {
    ...mapActions("costumerModules", ["getCostumers", "createCostumer"]),
    onSubmit(event) {
      event.preventDefault();
      this.createCostumer(this.form);
      //alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped></style>
