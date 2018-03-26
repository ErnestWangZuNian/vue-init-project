<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        菜单1
                        </MenuItem>
                        <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        菜单2
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        菜单3
                        </MenuItem>
                        <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        菜单4
                        </MenuItem>
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
        name: "layout"
    };
</script>
<style lang="scss" scoped>
    @import "./style.scss";
</style>