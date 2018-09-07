

<template>
  <van-row class="layout-container">
    <slot></slot>
    <van-tabbar v-model="active">
      <van-tabbar-item :icon="item.icon" :dot="item.dot" :info="item.info" v-for="(item,index) in menus" :key="index" @click="gotoPath(item)">{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </van-row>
</template>
<script>
  export default {
    name: "layout",
    props: {
      type: {
        default: "yellow"
      }
    },
    data() {
      return {
        active: 3,
        menus: [{
            name: '首页统计',
            icon: "home",
            info: null,
            dot: false,
            path: "/"
          },
          {
            name: '订单查看',
            icon: "pending-orders",
            info: null,
            dot: false,
            path: "/order"
          },
          {
            name: '额度明细',
            icon: "pending-payment",
            info: null,
            dot: false,
            path: "/quota"
          },
          {
            name: '商户操作',
            icon: "shop",
            info: null,
            dot: false,
            path: "/merchant"
          }
        ]
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let currentPath = this.$route.path;
        this.menus.forEach((item, index) => {
          if (currentPath.indexOf(item.path) > -1) {
            this.active = index;
          }
        })
      },
      gotoPath(item) {
        this.$router.push(item.path)
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>