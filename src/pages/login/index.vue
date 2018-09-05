<template>
  <div>
    <van-row class="login-container">
      <van-row class="login-content">
        <Form ref="userform" :model="model" :rules="ruleInline">
          <FormItem prop="username">
            <van-field v-model="model.username" left-icon="contact" placeholder="请输入用户名" @input="onInput" />
          </FormItem>
          <FormItem prop="password">
            <van-field v-model="model.password" type="password" left-icon="contact" placeholder="请输入密码" @input="onInput" />
          </FormItem>
        </Form>
        <ZdButton size="large" type="yellow" @click="login">登录</ZdButton>
      </van-row>
    </van-row>
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter';
  import Form from "@/components/form";
  import ZdButton from "@/components/zdbutton";
  import url from "./api.actions.js";
  const FormItem = Form.Item;
  let currentPage = 1;
  export default {
    components: {
      Form,
      FormItem,
      ZdButton
    },
    mixins: [Emitter],
    mounted() {},
    data: () => {
      return {
        model: {
          user: '',
          password: ''
        },
        ruleInline: {
          username: [{
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
          "userform"
        ].validate(async(valid) => {
          if (valid) {
            let user = await Api.post(url.login, this.model);
            Utils.storage.setItem("USERINFO", user.data);
            this.$router.push('/');
          }
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
