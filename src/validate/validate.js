/*
 * @Author: wangzunian 
 * @Date: 2017-04-11 15:27:40 
 * @Last Modified by: wangzunian
 * @Last Modified time: 2017-04-11 17:58:57
 */
import Vue from 'vue'

/**   引入验证库veevalidate */
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from '../../static/js/zh_CN'

/**    自定义验证实例化函数 */
let extend = (name, regx) => {
  Validator.extend(name, {
    messages: {
      cn: (field, args) => {
        return 'The ' + field + ' value is not truthy.'
      }
    },
    validate(value) {
      let re = regx
      return new Promise(resolve => {
        resolve({
          valid: re.test(value) ? true : false
        })
      })
    }
  })
}

/**   自定义验证 */
extend('phone',/^1[3|5|7|8|][0-9]{9}$/)
extend('idCard',/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)
extend('bankAccount', /^\d{16,19}$/)

/**   验证配置 */
Validator.addLocale(zh_CN)
const dictionary = {
  zh_CN: {
    messages: {
      phone: () => '请输入正确的手机号码',
      idCard: () => '请输入正确的身份证号码',
      bankAccount: () => '请输入正确的银行账号'
    }
  },
}
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'zh_CN',
  dictionary: dictionary,
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
export default Vue.use(VeeValidate, config);
