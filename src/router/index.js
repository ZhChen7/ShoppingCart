import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cartshow from "../views/Cartshow.vue";
import ShoppingTrolley from  "../views/ShoppingTrolley.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/cartshow",
    name:"cartshow",
    component:Cartshow
  },
  {
    path:"/shoppingtrolley",
    name:"ShoppingTrolley",
    component:ShoppingTrolley
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
