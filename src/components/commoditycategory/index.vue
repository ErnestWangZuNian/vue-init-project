<template>
  <div class="commodity-category-container">
    <van-tabs class="category-list" @click="clickTab">
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
        <van-row class="category-list-container">
          <van-col span="5" class="left">
            <VScrollContainer :list="categoryChildrenList" @changeChildren="changeChildren"></VScrollContainer>
          </van-col>
          <van-col span="19">
            <VScrollContainer :key="Math.random().toString(36).substr(2)">
              <CommodityList :requestData="requestData" />
            </VScrollContainer>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import {
    Tab,
    Tabs,
    Row,
    List,
    Col
  } from "vant";
  import url from "./api.actions.js";
  import VScrollContainer from "../vscrollcontainer";
  import CommodityList from "../commoditylist";
  export default {
    name: "commoditycategorylist",
    components: {
      Tab,
      Tabs,
      Row,
      List,
      Col,
      VScrollContainer,
      CommodityList
    },
    props: {},
    data() {
      return {
        categoryList: [],
        categoryChildrenList: [],
        currentCategoryId: null,
        requestData: null
      };
    },
    mounted() {
      this.getCategoryList();
    },
    methods: {
      // 获取分类
      async getCategoryList() {
        try {
          let res = await Api.get(url.categoryList);
          this.categoryList = res.body.list;
          let currentCategoryId =
            res.body.list.length > 0 ? res.body.list[0].id : null;
          this.getCategoryChildrenList(currentCategoryId);
        } catch (err) {}
        return this.categoryList;
      },
      // 获取二级分类
      async getCategoryChildrenList(id) {
        try {
          let res = await Api.get(`${url.categoryChildrenList}/${id}`);
          let currentCategoryId =
            res.body.length > 0 ? res.body[0].id : null;
          this.currentCategoryId = currentCategoryId;
          this.requestData = {
            category_id: this.currentCategoryId,
          };
          res.body.map((item, index) => {
            if (index === 0) {
              item.active = true;
            } else {
              item.active = false;
            }
          });
          this.categoryChildrenList = res.body;
        } catch (err) {}
        return this.categoryList;
      },
      //  切换分类
      clickTab(index, title) {
        this.categoryList.map(item => {
          if (item.name === title) {
            this.currentCategoryId = item.id;
            this.getCategoryChildrenList(item.id);
          }
        });
      },
      //  切换二级分类
      changeChildren(target) {
        this.requestData = {
          category_id: target.id
        };
      }
    }
  };

</script>
<style lang="scss">
  @import "./style.scss";

</style>
