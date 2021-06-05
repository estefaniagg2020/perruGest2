import Vue from "vue";
import {createRouter, createWebHistory} from "vue-router";



const routes = [
  {
    path: "/",
    name: "Date",
    component: Date
  },
  {
    path: "/costumers",
    name: "costumers",
    component: () => import('../views/costumers.vue')
  }
];
const router = createRouter(
    {
        history: createWebHistory(process.env.Base_URL),
        routes
    }
)