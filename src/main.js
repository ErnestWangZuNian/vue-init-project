// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import iView from "iview";
import Api from "@/api";
import "iview/dist/styles/iview.css";
import "@/assets/style/index.scss";
Vue.use(iView);

Vue.config.productionTip = false;
global.Api = Api;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
