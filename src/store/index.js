import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import test from './test';


export default new Vuex.Store({
  modules: {
    test
  }
});
