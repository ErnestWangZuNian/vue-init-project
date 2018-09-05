<template>
  <div class="zd-grid-container">
    <van-row v-for="(item,index) in data" :key="index" class="zd-grid-item">
      <van-col :span="24/item.length" v-for="(child,childIndex) in item" :key="childIndex">
        <van-col :span="labelSpan" class="zd-grid-lable">
          {{child.label}}
        </van-col>
        <van-col :span="valueSpan" class="zd-grid-value">
          {{child.value || Utils.blankPlaceholder}}
        </van-col>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  export default {
    name: "zdgrid",
    props: {
      data: {
        type: Array,
        default: () => {
          return [
            []
          ]
        }
      },
      labelSpan: {
        type: [String, Number],
        default: 11
      },
      valueSpan: {
        type: [String, Number],
        default: 13
      }
    },
    data() {
      return {}
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>