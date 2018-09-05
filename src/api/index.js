import Api from "wzn-api";
import Vue from "vue";
import Utils from "../utils";
import { Toast } from "vant";
let api = new Api();
let token = Utils.getToken();
Vue.use(Toast);
// 添加请求拦截器
api.interceptors.request.use(
  config => {
    if (token) {
      config.headers.token = token;
      config.headers.common["Content-Type"] = "application/json;charset=UTF-8";
    }
    Toast.loading({
      mask: true,
      message: "加载中..."
    });
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
api.interceptors.response.use(
  response => {
    if (!response.data.status) {
      Toast.fail(response.data.message);
      return Promise.reject(response.data);
    } else {
      Toast.clear();
      return response.data;
    }
  },
  error => {
    // 对响应错误做点什么
    Toast.fail("网络请求失败");
    return Promise.reject(error);
  }
);
export default api;
