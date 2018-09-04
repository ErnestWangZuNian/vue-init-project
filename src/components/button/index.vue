<template>
    <div :class="isBorder ? 'component-icon-text border-right':'component-icon-text'">
        <van-icon :name="name" :color="color"/>
        <div class="icon-text" :style="{color}">{{text}}</div>
    </div>
</template>
<script>
export default {
  name: "icontext",
  props: {
    color: {
      type: String
    },
    name: {
      type: String
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>