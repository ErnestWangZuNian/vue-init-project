import Vue from "vue";
import Router from "vue-router";
import Demo from "@/pages/demo";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Demo",
      component: Demo
    }
  ]
});
