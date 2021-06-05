<template>
  <div>
    <div class="mb-4">
      <h3 class="d-inline-flex mr-4">Lista de clientes</h3>
      <b-button class="d-inline-flex" @click="show = !show"
        ><i class="cil-user-follow"></i
      ></b-button>
    </div>

    <b-table-simple
    id="my-table"
      striped
      hover
      :per-page="perPage"
      :current-page="currentPage"
    >
      <b-thead>
        <b-tr>
          <b-th>Nombre</b-th>
          <b-th>Email</b-th>
          <b-th>Teléfono</b-th>
          <b-th>Mascota</b-th>
          <b-th>Pelo mascota</b-th>
          <b-th>Raza</b-th>
          <b-th>Acción</b-th>
        </b-tr>
      </b-thead>
      <b-tbody id="itemList" v-for="(item, index) in itemsForList" :key="item.id">
        <b-tr >
          <b-td>{{ item.name }}</b-td>
          <b-td>{{ item.email }}</b-td>
          <b-td>{{ item.telf }}</b-td>
          <b-td>{{ item.name_pet }}</b-td>
          <b-td>{{ item.hair_pet }}</b-td>
          <b-td>{{ item.breed_pet }}</b-td>
          <b-button class="bg-transparent border-0" @click="updateItem(item)"
            ><i class="cil-pencil text-info"></i
          ></b-button>
          <b-button @click="deleteCostumer({item:item, index:index})" class="bg-transparent border-0"
            ><i class="cil-trash text-danger"></i
          ></b-button>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
    ></b-pagination>

    <div class="row justify-content-center col-12">
      <div class="col-9 justify-content-center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show || editActive">
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
              :value="form.breed_pet"
              :options="breeds"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Pelo:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.hair_pet"
              :value="form.hair_pet"            
              :options="hairs"
              required
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" :variant="editActive ? 'success' : 'primary'">Enviar</b-button>
          <b-button type="reset" variant="danger" v-if="!editActive">Reset</b-button>
          <b-button type="reset" variant="danger" v-else @click="cancelEdit">Cancelar</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="show"> </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name:'ClientesComponent',
  data() {
    return {
      editActive:false,     
      perPage: 5,
      currentPage: 1,
      form: {
        id:"",
        email: "",
        name: "",
        telf: "",
        name_pet: "",
        hair_pet: null,
        breed_pet: null
      },
      breeds: [
        { text: "Raza", value: null },
        "Bulldog",
        "Chihuaha",
        "Yorkshire",
        "Pastor Alemán",
        "Mestizo",
        "Gato persa"
      ],
      hairs: [
        { text: "Pelo", value: null },
        "Largo/fino",
        "Largo/grueso",
        "Corto",
        "Corto/fino",
        "Corto/grueso",
        "Sin definir"
      ],
      show: false
    };
  },
  created() {
    this.getCostumers();
  },

  computed: mapState({
    itemsClientes: state => state.costumerModules,
    rows() {
      return this.itemsClientes.items.length;
    },
      itemsForList() {
       return this.itemsClientes.items.slice(
         (this.currentPage - 1) * this.perPage,
         this.currentPage * this.perPage
       );
     },
    // usersProfile: (state) =>
    //   state.usersModel.items.filter((user) => user.class != "Client"),
    // profiles: (state) => state.profilesModel.items,
    // users: (state) => state.budgetsModel.users,
  }),
  methods: {
   
    ...mapActions("costumerModules", ["getCostumers", "createCostumer","deleteCostumer", "updateCostumer"]),
    onSubmit(event) {
      event.preventDefault();
      if(!this.editActive)
      {
      this.createCostumer(this.form);
      this.form.email = "";
      this.form.name = "";
      this.form.telf = "";
      this.form.name_pet = "";
      this.form.hair_pet = null;
      this.form.breed_pet = null; 
      }else{
      this.updateCostumer(this.form);
      this.editActive = false;
      }     
    },
    updateItem(value)
    { console.log(value)
      this.form.email = value.email;
      this.form.name =  value.name;
      this.form.telf =  value.telf;
      this.form.name_pet = value.name_pet;
      this.form.hair_pet = value.hair_pet;
      this.form.id = value.id;
      this.form.breed_pet = value.breed_pet; 
      this.editActive = true; 
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    }, 
    cancelEdit(){
       this.editActive = false;
       this.show = false;
    },
  }
};
</script>

<style scoped></style>
