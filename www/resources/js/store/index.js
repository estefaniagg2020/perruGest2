import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import costumerModules from "./modules/costumerModules"

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    loadingInitData({ commit, dispatch, state }) {    
      dispatch("costumerModules/getCostumers");
    }
     
  },
  modules: {
    costumerModules
  }
});