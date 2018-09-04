<template>
  <div>
    <van-row class="login-container">
      <van-row class="login-content">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <van-field v-model="formInline.user" left-icon="contact" placeholder="请输入用户名" @input="onInput" />
          </FormItem>
          <FormItem prop="password">
            <van-field v-model="formInline.password" left-icon="contact" placeholder="请输入用户名" @input="onInput" />
          </FormItem>
          <FormItem>
            <van-button size="large" @click="login">登录</van-button>
          </FormItem>
        </Form>
      </van-row>
    </van-row>
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter';
  import Form from "@/components/form";
  import url from "./api.actions.js";
  const FormItem = Form.Item;
  let currentPage = 1;
  export default {
    components: {
      Form,
      FormItem
    },
    mixins: [Emitter],
    mounted() {},
    data: () => {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [{
            required: true,
            message: '请输入用户名'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }]
        }
      };
    },
    methods: {
      onInput(value) {
        // this.$watch('rules');
        this.dispatch("FormItem", "on-form-change", value)
      },
      login(name) {
        this.$refs[
          "formInline"
        ].validate((valid, err) => {
          if (valid) {
            Api.post(url.login, this.formInline).then(data => {
              console.log(data)
            })
            console.log(this.formInline, '1111')
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
