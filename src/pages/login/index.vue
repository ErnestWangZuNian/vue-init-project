<template>
  <div>
    <van-row class="login-container">
      <van-row class="login-content">
        <Form ref="userform" :model="model" :rules="rules">
          <FormItem prop="username">
            <ZdField v-model="model.username" left-icon="contact" placeholder="请输入用户名" />
          </FormItem>
          <FormItem prop="password">
            <ZdField v-model="model.password" type="password" left-icon="clock" placeholder="请输入密码" />
          </FormItem>
          <FormItem prop="google_code">
            <ZdField v-model="model.google_code" type="text" left-icon="more-o" placeholder="请输入谷歌验证码">
              <ZdButton slot="button" type="yellow" @click="lookGoogleCode" :disabled="model.username===''"><span class="text">查看谷歌验证码</span></ZdButton>
            </ZdField>
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
  import ZdField from '@/components/zdfield';
  import url from "./api.actions.js";
  const FormItem = Form.Item;
  let currentPage = 1;
  export default {
    components: {
      Form,
      FormItem,
      ZdButton,
      ZdField,
    },
    mixins: [Emitter],
    mounted() {},
    data: () => {
      return {
        model: {
          username: '',
          password: '',
          google_code: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }],
          google_code: [{
            required: true,
            message: '请输入谷歌验证码'
          }]
        }
      };
    },
    methods: {
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
      },
      async lookGoogleCode() {
        let res = await Api.post(url.getPwdSec, {
          username: this.model.username
        });
        if (res.data && res.data.data) {
          this.$dialog.alert({
            title: null,
            message: `您的秘钥是${res.data.data}`
          });
        } else {
          this.$dialog.alert({
            title: null,
            message: `${res.message}`
          });
        }
        this.isCanLookCode = false;
      }
    }
  };
</script>
<style lang="scss">
  @import "./style.scss";
</style>
