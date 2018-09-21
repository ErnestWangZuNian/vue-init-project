<template>
  <Layout>
    <div class="home-container">
      <Form ref="form" :rules="ruleInline" :model="formInline">
        <FormItem prop="user" label="用户名">
          <ZdField  :value="formInline.user" placeholder="请输入用户名" @input="changeInput"/>
        </FormItem>
      </Form>
      <van-button type="primary" @click="handleSubmit">确定</van-button>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import Form from "@/components/form";
  import ZdNodata from "@/components/zdnodata";
  import ZdField from '@/components/zdfield';
  import Emitter from '../../mixins/emitter';
  const FormItem = Form.Item;
  export default {
    name: "demo",
    mixins: [Emitter],
    components: {
      Layout,
      Form,
      FormItem,
      ZdField,
      ZdNodata
    },
    created() {},
    mounted() {
    },
    data: () => {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [{
            required: true,
            message: 'Please fill in the user name'
          }],
          password: [{
              required: true,
              message: 'Please fill in the password.',
            },
            {
              type: 'string',
              min: 6,
              message: 'The password length cannot be less than 6 bits'
            }
          ]
        }
      }
    },
    methods: {
      changeInput(value) {
        this.formInline.user = value;
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
