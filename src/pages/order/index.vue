<template>
  <Layout>
    <div class="order-container">
      <van-nav-bar title="订单查看" left-text="返回" @click-left="back" left-arrow />
      <van-tabs>
        <van-tab title="入账订单">
          <EntryOrder></EntryOrder>
        </van-tab>
        <van-tab title="提现订单">
          <CashOrder></CashOrder>
        </van-tab>
      </van-tabs>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import CashOrder from "./cashorder";
  import EntryOrder from "./entryorder"
  export default {
    components: {
      Layout,
      CashOrder,
      EntryOrder
    },
    mounted() {},
    data: () => {
      return {}
    },
    methods: {
      back() {
        this.$router.back();
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
