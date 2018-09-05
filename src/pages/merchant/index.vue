<template>
  <Layout>
    <div class="merchant-container">
      <ZdItem :title="item.name" v-for="(item,index) in merfloorList" :key="item.id">
        <van-row slot="content">
          <ZdGrid :data="[
                    [{label:'商户账号',value:item.name_sn},{label:'商户冷却时间',value:item.cdtime}],
                    [{label:'商户日限额',value:item.daylimits},{label:'费率',value:item.rate}],
                    [{label:'状态',value:item.status ? '已上线' : '已下线'},{label:'是否禁用',value:item.audit ? '已禁用' : '已启用'}]
                    ]">
          </ZdGrid>
        </van-row>
        <van-row slot="footer">
          <ZdButton>编辑</ZdButton>
          <ZdButton type="primary" class="ml10">上线</ZdButton>
        </van-row>
      </ZdItem>
    </div>
  </Layout>
</template>
<script>
  import Layout from "@/components/layout";
  import ZdItem from "@/components/zditem"
  import ZdButton from "@/components/zdbutton"
  import ZdGrid from "@/components/zdgrid"
  // import ZdScrollcontainer from "@/components/"
  import url from "./api.actions"
  export default {
    components: {
      Layout,
      ZdItem,
      ZdButton,
      ZdGrid
    },
    mounted() {
      this.getMerfloorList();
    },
    data: () => {
      return {
        merfloorList: []
      };
    },
    methods: {
      async getMerfloorList() {
        let res = await Api.post(url.merfloorList);
        this.merfloorList = res.data.list;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
