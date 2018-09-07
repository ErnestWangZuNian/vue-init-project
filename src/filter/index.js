import Vue from "vue";
import Utils from "../utils/index";
// 单个价格处理
Vue.filter("money", value => {
  // 返回处理后的价格
  value = Utils.other.formatMoney(value)
  return value
});
