import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cartshow from "../views/Cartshow.vue";
import ShoppingTrolley from  "../views/ShoppingTrolley.vue"
import login from  "../views/login.vue"
import register from  "../views/register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/cartshow/:id",
    name:"cartshow",
    component:Cartshow
  },
  {
    path:"/shoppingtrolley",
    name:"ShoppingTrolley",
    component:ShoppingTrolley
  },
  {
    path:"/login",
    name:"login",
    component:login
  },
  {
    path:"/register",
    name:"register",
    component:register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
