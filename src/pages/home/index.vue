<template>
  <Layout>
    <div class="home-container">
      <schart class="wrapper" :canvasId="canvasId" :type="type" :data="data" :options="options"></schart>
       <schart class="wrapper" :canvasId="canvasId1" :type="type" :data="data" :options="options"></schart>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import Schart from "vue-schart";
  export default {
    components: {
      Layout,
      Schart
    },
    mounted() {},
    data: () => {
      return {
        canvasId: 'myCanvas',
        canvasId1:'myCanvas1',
        type: 'ring',
         width: 500,
            height: 400,
        data: [{
            name: '2014',
            value: 1342
          },
          {
            name: '2015',
            value: 2123
          },
          {
            name: '2016',
            value: 1654
          },
          {
            name: '2017',
            value: 1795
          },
        ],
        options: {
          title: "订单金额展示"
        }
      }
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
