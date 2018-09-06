

<template>
  <van-row class="zd-item-container">
    <van-row class="title">
      <van-col span="20">{{title}}</van-col>
      <van-col span="4" class="right" @click="onRight" v-if="titleRight">
        <van-icon name="delete" />
      </van-col>
    </van-row>
    <van-row class="content">
      <slot name="content"></slot>
    </van-row>
    <van-row class="footer">
      <slot name="footer"></slot>
    </van-row>
  </van-row>
</template>
<script>
  export default {
    name: "zdbutton",
    props: {
      title: {
        type: String
      },
      titleRight: {
        default: false
      }
    },
    data() {
      return {
        className: `van-button--${this.type}`
      }
    },
    method: {
      onRight() {
        this.$emit("on-right");
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>