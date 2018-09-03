<template>
  <div class="commodity-list-container">
    <van-list v-model="loading" :finished="finished" @load="getCommoditylist" :offset="offset">
      <van-row v-for="item in list" :key="item.id" class="commodity-list">
        <van-col span="8" class="img-container">
          <img :src="item.cover[0]" v-lazy="item.cover[0]" />
        </van-col>
        <van-col span="16" class="text-container">
          <van-row class="name">{{item.name}}</van-row>
          <van-row class="price">{{item.price[0]}}</van-row>
          <van-row class="introduce">{{item.introduction}}</van-row>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>
<script>
  import {
    List,
    Toast
  } from "vant";
  import url from "./api.actions.js";
  let currentPage = 1;
  export default {
    name: "commoditylist",
    components: {
      List,
      Toast
    },
    props: {
      requestData: {
        type: Object,
        default: null
      },
      requestUrl: {
        type: String,
        default: null
      },
      offset: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        loading: false,
        finished: false,
        currentPage: 1,
        list: []
      };
    },
    mounted() {
      this.currentPage = 1;
    },
    methods: {
      async getCommoditylist() {
        let res = await Api.get(this.requestUrl ? this.requestUrl : url.list, {
          page: this.currentPage,
          pageSize: 15,
          ...this.requestData,
        });
        let page = res.body.pagination ? res.body.pagination : null;
        this.list = this.list.concat(res.body.list ? res.body.list : res.body);
        this.loading = false;
        ++this.currentPage;
        if (page) {
          if (this.currentPage > page.last_page) {
            this.finished = true;
          }
        } else {
          console.log(2222)
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
