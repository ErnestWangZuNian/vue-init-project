import Vue from "vue";
import Router from "vue-router";
import Demo from "@/pages/demo";
import Tree from "@/pages/tree";
import DemoOne from "@/pages/demoone";
Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Demo",
      component: Demo
    },
    {
      path: "/tree",
      name: "Tree",
      component: Tree
    }
  ]
});
