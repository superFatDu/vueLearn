import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Vuex from "./views/Vuex";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "home",
      component: Home,
      meta: {requireAuth: true}
    },
    {
      path: "/vuex",
      name: "Vuex",
      component: Vuex
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
