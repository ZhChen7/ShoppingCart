import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cartshow from "../views/Cartshow.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
