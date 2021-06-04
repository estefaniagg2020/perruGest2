import Vue from "vue";
import axios from "axios";
import { Store } from "vuex";

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {},
  actions: {
    async getCostumers({ commit }) {
      await axios.get("/clientes").then(res => {    
        commit("all", res.data.customer);
      });
    },
    async createCostumer({ commit }, values) {     
      await axios.post("/clientes", values).then(res=>{
     
        console.log(res)
      })
    }
  },
  mutations: {
    all(state, payload) {
      payload.filter(item => {
        state.items.push({
          "Nombre cliente": item.name,
          Email: item.email,
          Teléfono: item.telf,
          "Nombre mascota": item.name_pet,
          "Pelo mascota": item.hair_pet,
          "Raza mascota": item.breed_pet,          
        });
      });
    },
    create(state, payload) {
      state.items.push(payload)
    }
  }
};
