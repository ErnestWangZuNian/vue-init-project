import Vue from 'vue'
import Router from 'vue-router'
const Hello = resolve => require(['../components/Hello.vue'], resolve)
const Form = resolve => require(['../components/Form.vue'], resolve)
const List = resolve => require(['../components/List.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '',
      redirect: '/form'
    }
  ]
})
