<template>
  <div class="zd-filed-container">
    <van-field v-bind="$attrs" v-on="$listeners" :value="valueClone" @blur="blur">
     <slot></slot>
    </van-field>
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter';
  export default {
    name: "zdfiled",
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Number]
      }
    },
    inheritAttrs: false,
    data() {
      return {
        valueClone: this.value
      }
    },
    watch: {
      value(val) {
        this.valueClone = val;
      },
      valueClone(val) {
        this.$emit('input', val);
        this.dispatch('FormItem', 'on-form-change', this);
      }
    },
    mounted() {},
    methods: {
      blur(value) {
        this.dispatch('FormItem', 'on-form-blur', this);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>