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
      console.log(values);
      await axios.post("/clientes", values).then(res => {
        console.log(res);
        commit("create", res);
      });
    },
    async updateCostumer({ commit }, values) {
      console.log("vaalue",values)
      let id = values.id;
      await axios.put(`/clientes/${id}`).then(res => {
        console.log(res);
        commit("update", res.data);
      });
    },
    async deleteCostumer({ commit }, values) {
      let id = values.item.id;
      console.log(id);
      await axios.delete(`/clientes/${id}`).then(res => {
        console.log(res);
        commit("delete", values.index);
      });
    }
  },
  mutations: {
    all(state, payload) {
      payload.filter(item => {
        state.items.push({
          id: item.id,
          name: item.name,
          email: item.email,
          telf: item.telf,
          name_pet: item.name_pet,
          hair_pet: item.hair_pet,
          breed_pet: item.breed_pet
        });
      });
    },
    create(state, payload) {
      state.items.push(payload);
    },
    update(state, payload) {
    const index = state.items.findIndex((item)=> item.id === payload.id)
    state.items[index] = payload
    },
    delete(state, payload) {
      state.items.splice(payload, 1);
    }
  }
};
