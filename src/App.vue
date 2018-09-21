<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
  },
  destroyed() {
    Utils.storage.clear();
  },
};
</script>

