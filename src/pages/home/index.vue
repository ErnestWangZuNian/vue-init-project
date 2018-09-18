<template>
  <Layout>
    <div class="home-container">
      <van-row class="info-container">
        <div class="content">
          <div class="list title">
            用户名称：{{userName}}
          </div>
          <div class="list">
            <ZdButton type="primary" @click="logout">退出登录</ZdButton>
          </div>
        </div>
      </van-row>
      <van-row class="data-container">
        <van-cell title="今日赢利（元）" :value="20000|money" />
        <van-cell title="今日已跑额度（元）" :value="180|money" />
        <van-cell title="剩余额度（元）" :value="400|money" />
        <van-cell title="在线支付宝数量" :value="800|money" />
        <van-cell title="在线微信数量" :value="2500|money" />
      </van-row>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import ZdButton from "@/components/zdbutton";
  import ZdGrid from "@/components/zdgrid";
  export default {
    components: {
      Layout,
      ZdButton,
      ZdGrid
    },
    mounted() {},
    data: () => {
      return {
        userName: Utils.getUserInfo().nickname
      }
    },
    methods: {
      logout() {
        Utils.storage.clear();
        this.$router.push('/login');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
