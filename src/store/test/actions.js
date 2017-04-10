/*
 * @Author: wangzunian 
 * @Date: 2017-04-06 11:43:29 
 * @Last Modified by: wangzunian
 * @Last Modified time: 2017-04-07 15:16:27
 */
export default {
    test : ({commit}) => commit('TEST'),
    operator: ({commit},param) => commit('OPERATOR',{type: param.type})
}
