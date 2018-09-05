

<template>
  <van-button v-bind="$attrs" v-on="$listeners" :class="className">
    <slot></slot>
  </van-button>
</template>
<script>
  export default {
    name: "zdbutton",
    props: {
      type: {
        default: "yellow"
      }
    },
    data() {
      return {
        className: `van-button--${this.type}`
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>