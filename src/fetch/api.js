/*
 * @Author: wangzunian 
 * @Date: 2017-04-10 10:16:22 
 * @Last Modified by: 2017-5-24
 * @Last Modified time: 2017-06-07 22:03:32
 */
import axios from 'axios'


/**  axios基础配置 */
axios.defaults.timeout = 5000;
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';


/** axios封装请求get,post,put,delete方法 */
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchPut(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchDelete(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**  项目所有的请求写在这里并导出 */
export default {
  /**
   * 测试get请求
   * 
   * @param {any} params 
   * @returns 
   */
  test(params) {
    return fetchGet('/front/accountCenter/myProject/getFinanceApplyList.json?', params)
  },
  /**
   *  测试post请求
   * 
   * @param {any} params 
   * @returns 
   */
   login(params) {
    return fetchPost('/common/passwordLogin.json', params)
  },

  /**  测试请求 */

  getFinaceList(params) {
     return fetchGet('/front/accountCenter/myProject/getFinanceApplyList.json?', params)
  }
}
