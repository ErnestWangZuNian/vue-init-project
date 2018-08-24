import Vue from "vue";
import Router from "vue-router";
import Demo from "@/pages/demo";
import DemoOne from "@/pages/demoone";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Demo",
      component: Demo
    },
    {
      path: "/menu-one",
      name: "DemoOne",
      component: DemoOne
    }
  ]
});
