<template>
  <div>
    <van-cell-group class="user-group">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
          <input v-model="formInline.user" label="用户名" placeholder="请输入用户名" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
      <van-cell icon="records" title="我的订单" is-link value="查看全部订单" />
      <van-row class="user-links">
        <van-col span="8">
          <IconText name="pending-payment" color="red" text="待付款" :isBorder="true"></IconText>
        </van-col>
        <van-col span="8">
          <IconText name="pending-orders" color="red" text="待接单" :isBorder="true"></IconText>
        </van-col>
        <van-col span="8">
          <IconText name="pending-deliver" color="red" text="待发货"></IconText>
        </van-col>
      </van-row>
      <CommodityCategoryList/>
      <CommodityList :requestUrl="requestUrl" />

    </van-cell-group>
    <Layout>
      <Row>
        <Row class="title">   这是通过请求得到的数据</Row>
     
        <!-- <Row class="mb10" v-for="(item,index) in list.data" :key="index">
          {{item.name}}
        </Row> -->
      </Row>
    </Layout>
  </div>
</template>

<script>
  import {
    Row,
    Col,
    Icon,
    List,
    Cell,
    CellGroup
  } from "vant";
  import IconText from "@/components/icontext";
  import CommodityList from "@/components/commoditylist";
  import CommodityCategoryList from "@/components/commoditycategory";
  import Form from "@/components/form";
  import url from "./api.actions.js";
  const FormItem = Form.Item;
  let currentPage = 1;
  export default {
    components: {
      Row,
      Col,
      Icon,
      Cell,
      CellGroup,
      IconText,
      CommodityList,
      CommodityCategoryList,
      List,
      Form,
      FormItem
    },
    mounted() {},
    data: () => {
      return {
        list: [],
        loading: false,
        finished: false,
        requestUrl: "/v1/top",
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
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.formInline, '1111')
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      async getList() {
        let res = await Api.get(url.list, {
          page: 1,
          pageSize: 20
        });
        console.log(res.body, '1111')
        this.list = this.list.concat(res.body);
        this.loading = false;
        ++currentPage;
        if (currentPage > 5) {
          this.finished = true;
        }
        return this.list;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
