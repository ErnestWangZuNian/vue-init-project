import Vue from "vue";
import Demo from "@/pages/demo";
import Router from "vue-router";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Order from "@/pages/order";
import Quota from "@/pages/quota";
import Merchant from "@/pages/merchant";
import MerchantAddEdit from "@/pages/merchant/addedit";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/demo",
      name: "Demo",
      component: Demo
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/quota",
      name: "Quota",
      component: Quota
    },
    {
      path: "/merchant",
      name: "Merchant",
      component: Merchant
    },
    {
      path: "/merchant/add-edit/:status",
      name: "MerchantAddEdit",
      component: MerchantAddEdit
    }
  ]
});
router.beforeEach((to, from, next) => {
  const token = Utils.getToken();
  if (!token && to.name !== "Login") {
    next({
      name: "Login"
    });
  } else if (!token && to.name === "Login") {
    next();
  } else if (token && to.name === "Login") {
    next({
      name: "Home"
    });
  } else {
    next();
  }
});
export default router;
