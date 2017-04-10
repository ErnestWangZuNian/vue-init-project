/*
 * @Author: wangzunian 
 * @Date: 2017-04-06 11:44:33 
 * @Last Modified by: wangzunian
 * @Last Modified time: 2017-04-07 15:15:54
 */
import * as type from './mutations_types.js';
import tool from '../../utils/tool'
export default {
  [type.TEST](states, obj) {
    states.count++;
    tool.localTest.set(states);
  },
  [type.OPERATOR](states,obj){
    states.operatorType = obj.type
    tool.localTest.set(states);
  }
}