<template>
  <Layout>
    <div class="home-container">
      <van-cell title="今日赢利（元）" :value="20000|money" />
      <van-cell title="今日已跑额度（元）" :value="180|money" />
      <van-cell title="剩余额度（元）" :value="400|money" />
      <van-cell title="在线支付宝数量" :value="800|money" />
      <van-cell title="在线微信数量" :value="2500|money"  />
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  export default {
    components: {
      Layout
    },
    mounted() {},
    data: () => {
      return {}
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
