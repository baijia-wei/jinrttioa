import Vue from "vue";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueRouter, { RouteConfig } from "vue-router";
import Logoin from "../views/Logoin.vue";
import Personal from "../views/Personal.vue";
import Register from "../views/Register.vue";
import Router from "vue-router";
import jwt_decode from "jwt-decode";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",

    component: () => import("../views/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/personal",

    component: () => import("../views/Personal.vue"),
  },
  {
    path: "/register",

    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
