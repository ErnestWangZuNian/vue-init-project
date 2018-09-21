<template>
  <div class="v-scroll-container" :style="{height:`${height}px`}">
    <div v-if="list" :class="item.active ? 'children-list children-list-active' : 'children-list' " v-for="item in list" :key="item.id" @click="changeChildren(item)">{{item.name}}</div>
    <ZdNodata v-if="dataLen===0"></ZdNodata>
    <slot v-if="list === undefined   ||  !list"></slot>
  </div>
</template>
<script>
  import ZdNodata from "@/components/zdnodata"
  export default {
    name: "vscrollcontainer",
    components: {
      ZdNodata
    },
    props: {
      list: {
        type: Array,
      },
      dataLen: {
        type: Number,
      },
      height: {
        type: Number,
        default: this.defaultHeight,
      }
    },
    mounted() {
    },
    data() {
      return {
        defaultHeight: `${Utils.getContentHeight()}px`
      }
    },
    methods: {
      changeChildren(target) {
        this.list.map(item => {
          item.active = false;
          if (item.id === target.id) {
            item.active = true;
            this.$emit(`changeChildren`, target)
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
