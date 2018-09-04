import Vue from "vue";
import Router from "vue-router";
import Demo from "@/pages/demo";
import Login from "@/pages/login";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Demo",
      component: Demo
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
