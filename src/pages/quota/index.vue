<template>
  <Layout>
    <div class="quota-container">
      <van-nav-bar title="额度明细" left-text="返回" @click-left="back" left-arrow />
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="disabled">
        <ZdScrollcontainer :dataLen="merfloorList.length">
          <ZdItem :title="item.name" v-for="item in merfloorList" :key="item.id" @on-right="deleteItem(item)">
            <van-row slot="content">
              <ZdGrid :data="[[{label:'账号',value:item.name_sn},{label:'冷却时间',value:item.cdtime}], [{label:'日限额',value:item.daylimits},{label:'费率',value:item.rate}],  [{label:'状态',value:item.status ? '已上线' : '已下线'},{label:'是否禁用',value:item.audit ? '已禁用' : '已启用'}]]">
              </ZdGrid>
            </van-row>
          </ZdItem>
        </ZdScrollcontainer>
      </van-pull-refresh>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout";
  import ZdItem from "@/components/zditem"
  import ZdGrid from "@/components/zdgrid"
  import ZdScrollcontainer from "@/components/zdscrollcontainer"
  import url from "./api.actions"
  export default {
    name: "index",
    components: {
      Layout,
      ZdItem,
      ZdGrid,
      ZdScrollcontainer
    },
    mounted() {
      this.getMerfloorList();
    },
    destroyed() {},
    data: () => {
      return {
        merfloorList: [],
        isLoading: false,
        currentPage: 1,
        disabled: false,
        height: Utils.getContentHeight()
      };
    },
    methods: {
      back() {
        this.$router.back();
      },
      onRefresh() {
        ++this.currentPage;
        this.getMerfloorListByPage(this.currentPage);
      },
      async getMerfloorList() {
        let res = await Api.post(url.eduList, {
          pagesize: 10,
          user_id: Utils.getUserId()
        });
        this.merfloorList = res.data.list;
      },
      async getMerfloorListByPage(page = 1) {
        let res = await Api.post(url.eduList, {
          user_id: Utils.getUserId(),
          pagesize: 10,
          page
        });
        if (this.currentPage <= res.data.countpage) {
          this.isLoading = false;
          this.merfloorList = res.data.list.concat(this.merfloorList);
          this.$toast({
            message: '已为您更新了10条数据!',
            position: 'top'
          });
        } else {
          this.isLoading = false;
          this.$toast({
            message: '没有更多数数据了!',
            position: 'top'
          });
          this.disabled = true;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
