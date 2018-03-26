<template>
  <div>
    <Layout>
      <Row>
        <Row class="title">   这是通过请求得到的数据</Row>
     
        <Row class="mb10" v-for="(item,index) in list.data" :key="index">
          {{item.name}}
        </Row>
      </Row>
    </Layout>
  </div>
</template>
<script>
  import Layout from "@/components/layout";
  import url from "./api.actions";
  export default {
    name: "demo",
    components: {
      Layout
    },
    data() {
      return {
        list: {}
      }
    },
    created() {
      Api.get(url.list).then(res => {
        this.list = res.data
        console.log(this.list)
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
