<template>
  <Layout>
    <div class="home-container">
      <Form ref="form" :rules="ruleInline" :model="formInline">
        <FormItem prop="user"   :rules="ruleInline.user">
          <van-field v-model="formInline.user" placeholder="请输入用户名" @input="input"/>
        </FormItem>
      </Form>
      <van-button type="primary" @click="handleSubmit">确定</van-button>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import Form from "@/components/form";
  import ZdNodata from "@/components/zdnodata"
  import Emitter from '../../mixins/emitter';
  const FormItem = Form.Item;
  export default {
    mixins: [Emitter],
    components: {
      Layout,
      Form,
      FormItem,
      ZdNodata
    },
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
            message: 'Please fill in the user name',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: 'Please fill in the password.',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: 'The password length cannot be less than 6 bits',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      input(value) {
        this.dispatch('FormItem', 'on-form-change', this);
        console.log(value,'ww')
      },
      handleSubmit(name) {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
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
