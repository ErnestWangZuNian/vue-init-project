// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Api from "@/api";
import filters from './filter/index'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import "../src/assets/style/index.scss"
import flexible from "./utils/flexible";
import utils from "./utils/index";
const loadImg = require('../static/imgs/loading.png')
import {
  Lazyload
} from 'vant';
flexible(window);
Vue.use(Vant);
Vue.use(Lazyload, {
  loading: loadImg
});


Vue.config.productionTip = false;
global.Api = Api;
global.utils = utils;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
