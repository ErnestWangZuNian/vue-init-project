<template>
  <div class="zd-filed-container">
    <van-field v-bind="$attrs" :value="value" @input="input" />
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter';
  export default {
    name: "zdfiled",
    mixins: [Emitter],
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      input(value) {
        this.$emit("input",value);
        this.dispatch('FormItem', 'on-form-change', this);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>