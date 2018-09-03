<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" :active-name="activedMenu" @on-select="selectMenu">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <!-- <router-link :to="item.path" > -->
            <MenuItem :name="item.name" v-for="(item,index) in menus" :key="index">
            <Icon type="ios-navigate"></Icon>
            {{item.name}}
            </MenuItem>
            <!-- </router-link> -->
          </div>
        </Menu>
      </Header>
      <Content class="layout-content">
        <slot></slot>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: "layout",
    data: () => {
      return {
        menus: [{
          name: '菜单1',
          path: '/'
        }, {
          name: '菜单2',
          path: '/menu-one'
        }],
        activedMenu: "菜单1"
      }
    },
    mounted() {

    },
    methods: {
      selectMenu(name) {
        this.activedMenu = name;
        this.menus.forEach(item => {
          if (item.name === name) {
            this.$router.push(`${item.path}`)
          }
        })
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
