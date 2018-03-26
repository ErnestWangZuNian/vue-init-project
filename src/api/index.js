import Api from "wzn-api";
let api = new Api();

// 添加请求拦截器
api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default api;
