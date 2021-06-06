import Vue from 'vue'
import Router from 'vue-router'
import ContainerComponent from "./components/ContainerComponent";
import CostumersComponent from "./components/ClientesComponent";
import DateComponent from "./components/DateComponent";

// Views
import Home from './views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",     
      name: "",
      redirect:'/Home',
      component: ContainerComponent,
      // children: [
      //   {
      //     path: "home",
      //     name: "Home",
      //     component: Home
      //   },
      //   {
      //     path: "clientes",
      //     name: "Costumers",
      //     component: CostumersComponent
      //   },
      //   {
      //     path: "date",
      //     name: "Date",
      //     component: DateComponent
      //   }

        // {
        //   path: "dashboard",
        //   name: "Dashboard",
        //   component: Dashboard
        // },
      //]
    }
  ],
  mode: "history"
});