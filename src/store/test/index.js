/*
 * @Author: wangzunian 
 * @Date: 2017-04-06 11:44:24 
 * @Last Modified by: wangzunian
 * @Last Modified time: 2017-04-07 14:58:48
 */

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import tool from '../../utils/tool'
const state = tool.localTest.get() || {
  count: 0,
  operatorType: 'test'
}

export default {
  state,
  getters,
  actions,
  mutations
}
