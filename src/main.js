/*
 * @Author: wangzunian 
 * @Date: 2017-04-07 11:45:04 
 * @Last Modified by: wangzunian
 * @Last Modified time: 2017-04-10 16:56:03
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import filter from './filter/filter'
import VeeValidate from 'vee-validate'

/**  引入elementui*/
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

/**   验证框架配置 */
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
}
/**   使用插件 */
Vue.use(VeeValidate, config);
Vue.use(Vuex);
Vue.use(ElementUI)

/** 引入工具类函数 */
import tool from './utils/tool'
import api from './fetch/api'

/**  vue项目配置 */
Vue.config.productionTip = false


/** 把一些公共方法或者属性注入到vue.prototype上面 */
const addVueInstanceMethod = {
  tool,
  api
}
Object.assign(Vue.prototype, addVueInstanceMethod)

/** 初始化入口函数 */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  template: '<App/>',
  components: {
    App
  }
})
