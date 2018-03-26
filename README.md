# vue-init-project

项目初始化项目，集成 router,axios,iview,scss，路由懒加载，方便新手直接使用 不用任何操作

> 目的：避免每次开始新建项目都有 Vue-cli，项目中已经封装了 api,集成了 router，iview, scss,方便项目使用

## 启动步骤

```bash
# 安装依赖包
npm install

# 启动开发服务
npm run dev 或者 npm run start

# 生成打包文件
npm run build

# 生成打包图形化预览
npm run build --report
```

## 项目结构

```bash
src
   api(用于项目的请求初始化)

   assets(静态资源公共的css images)

   components(公共组件)

   pages(页面)

      demo(具体页面)

        api.actions.js(页面的请求地址集合)

        index.vue(页面的结构和逻辑)

        style.scss(页面的样式)

   router(项目路由)

   app.vue(启动根目录)

   main.js(启动入口)
```

## api 的初始化

> 实例化 api Api 的方法和 axios 保持一致 详情见文档<https://github.com/ErnestWangZuNian/project-request-api>

```js
import Api from "wzn-api";
let api = new Api();

// 添加请求拦截器
api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default api;
```

### 页面调用

```js
<template>
  <div>
    <Layout>
      <Row>
        <Row class="title"> 这是通过请求得到的数据</Row>
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
    };
  },
  created() {
    Api.get(url.list).then(res => {
      this.list = res.data;
      console.log(this.list);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
```
