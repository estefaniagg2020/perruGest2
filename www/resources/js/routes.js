import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/date",
      name: "date",
      component: require("./views/Date")
    },
    {
      path: "/home/costumers",
      name: "Clientes",
      component: require("./views/Costumers")
    }
  ],
  mode: "history"
});