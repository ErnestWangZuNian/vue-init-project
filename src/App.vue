<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  destroyed() {
    Utils.storage.clear();
  },
};
</script>

