<template>
  <div class="v-scroll-container" :style="{height:height}">
    <div v-if="list" :class="item.active ? 'children-list children-list-active' : 'children-list' " v-for="item in list" :key="item.id"
      @click="changeChildren(item)">{{item.name}}</div>
    <slot v-if="list === undefined   ||  !list"></slot>
  </div>
</template>
<script>
  export default {
    name: "vscrollcontainer",
    props: {
      list: {
        type: Array,
      }
    },
    data(){
      return {
        height: this.height || `${Utils.getContentHeight()}px`
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
