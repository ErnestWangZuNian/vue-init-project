<template>
  <div class="hello">
  
    <h1>{{person.name}}</h1>
  
    <h2>Essential Links</h2>
  
    <ul>
  
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
  
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
  
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
  
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  
      <br>
  
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
  
    </ul>
  
    <h2>Ecosystem</h2>
  
    <ul>
  
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
  
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
  
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
  
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  
    </ul>
  
    <div @click="addTest">
  
      vuex 展示 {{getCount}}
  
    </div>
  
    <div @click="operatorTest">
  
      vuex 展示 {{getOperatorType}}
  
    </div>
  
    <div>
  
      用于测试是否引入饿了么样式
  
    </div>
  
    <div class="block">
  
      <span class="demonstration">默认显示颜色</span>
  
      <span class="wrapper">
  
                <el-button type="success">成功按钮</el-button>
  
                <el-button type="warning">警告按钮</el-button>
  
                <el-button type="danger">危险按钮</el-button>
  
                <el-button type="info" @click="gotoLogin">去登录</el-button>
  
            </span>
  
    </div>
  
    <el-select v-model="value" placeholder="请选择">
  
      <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">
  
      </el-option>
  
    </el-select>
  
    <div>测试过滤器{{money | amount | toThousands}}</div>
  
  </div>
</template>

<script>
  import {
  
    mapGetters,
  
    mapActions
  
  } from 'vuex'
  
  export default {
  
    name: 'hello',
  
    data() {
  
      return {
  
        msg: '11hhh',
  
        person: {
  
          name: 'wangzunian',
  
          sex: 'man',
  
          height: 'cm'
  
        },
  
        money: '18784441144',
  
        options: [{
  
          value: '选项1',
  
          label: '黄金糕'
  
        }, {
  
          value: '选项2',
  
          label: '双皮奶'
  
        }, {
  
          value: '选项3',
  
          label: '蚵仔煎'
  
        }, {
  
          value: '选项4',
  
          label: '龙须面'
  
        }, {
  
          value: '选项5',
  
          label: '北京烤鸭'
  
        }],
  
        value: ''
  
      }
  
    },
  
    mounted() {
  
      //  测试get请求
  
      this.api.test().then(res => {
  
        console.log(res.body)
  
      }).catch(error => {
  
        console.log(error)
  
      })
  
      this.api.getCount({
  
        pageNo: '1'
  
      }).then(res => {
  
        alert('11111')
  
      }).catch(error => {
  
        alert('cuol')
  
      })
  
      //  测试post请求
  
      this.api.testPost({
  
        merchantId: 1,
  
        password: "123456",
  
        type: "supplier",
  
        userName: "000080",
  
        verifyCode: "5498"
  
      })
  
    },
  
    methods: {
  
      ...mapActions([
  
        'test',
  
        'operator'
  
      ]),
  
      render() {
  
        return createElement("input", {
  
            attrs: {
  
              name: 'test'
  
            },
  
            style: {
  
              color: 'red',
  
              fontSize: '14px',
  
              width: '100px'
  
            },
  
          })
  
          .on('change', function() {
  
            alert('wangzunian')
  
          })
  
      },
  
      gotoLogin() {
  
        this.$router.push({
  
          path: '/form'
  
        })
  
      },
  
      addTest() {
  
        this.test()
  
      },
  
      operatorTest() {
  
        this.operator({
  
          type: 'tested'
  
        })
  
      }
  
    },
  
    computed: {
  
      ...mapGetters([
  
        'getCount',
  
        'getOperatorType'
  
      ])
  
    }
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  
  h2 {
  
    font-weight: normal;
  
  }
  
  
  
  ul {
  
    list-style-type: none;
  
    padding: 0;
  
  }
  
  
  
  li {
  
    display: inline-block;
  
    margin: 0 10px;
  
  }
  
  
  
  a {
  
    color: #42b983;
  
  }
</style>