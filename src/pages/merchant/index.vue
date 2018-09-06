<template>
  <Layout>
    <div class="merchant-container">
      <van-nav-bar title="商户列表" left-text="返回" @click-left="back" right-text="新增" @click-right="gotoAdd" left-arrow />
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="disabled">
        <ZdScrollcontainer>
          <ZdItem :title="item.name" v-for="item in merfloorList" :key="item.id" @on-right="deleteItem(item)">
            <van-row slot="content">
              <ZdGrid :data="[[{label:'账号',value:item.name_sn},{label:'冷却时间',value:item.cdtime}], [{label:'日限额',value:item.daylimits},{label:'费率',value:item.rate}],  [{label:'状态',value:item.status ? '已上线' : '已下线'},{label:'是否禁用',value:item.audit ? '已禁用' : '已启用'}]]">
              </ZdGrid>
            </van-row>
            <van-row slot="footer">
              <ZdButton type="danger" @click="enable(item)">{{item.audit ==1 ? "启用" :"禁用"}}</ZdButton>
              <ZdButton type="primary" class="ml10" @click="changeStatus(item)">{{item.status ==1 ? "下线" :"上线"}}</ZdButton>
              <ZdButton @click="gotoEdit(item)" class="ml10">编辑</ZdButton>
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
  import ZdButton from "@/components/zdbutton"
  import ZdGrid from "@/components/zdgrid"
  import ZdScrollcontainer from "@/components/zdscrollcontainer"
  import url from "./api.actions"
  export default {
    name: "index",
    components: {
      Layout,
      ZdItem,
      ZdButton,
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
        loadingText: "加载中...",
        key: Utils.getRandom(),
        totalCount: 0,
        currentPage: 1,
        disabled: false,
        modal: {
          status: false,
          content: null
        },
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
        let res = await Api.post(url.merfloorList, {
          pagesize: 10
        });
        this.merfloorList = res.data.list;
      },
      async getMerfloorListByPage(page = 1) {
        let res = await Api.post(url.merfloorList, {
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
  
  
      },
      gotoAdd() {
        this.$router.push("/merchant/add-edit/add")
      },
      gotoEdit(item) {
        Utils.storage.setItem("MERCHANTINFO", item);
        this.$router.push(`/merchant/add-edit/edit`)
      },
      async changeStatus(item) {
        let res = await Api.post(url.merfloorSet, {
          mer_id: item.id,
          status: item.status == 1 ? 0 : 1
        });
        this.getMerfloorList();
      },
      async enable(item) {
        let res = await Api.post(url.merfloorAudit, {
          mer_id: item.id,
          audit: item.audit == 1 ? 0 : 1
        });
        this.getMerfloorList();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
