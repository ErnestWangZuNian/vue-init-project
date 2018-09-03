<template>
  <div class="about-container">
    <div class="root">
      <div class="list">
        <div class="rect">

        </div>
      </div>
      <div class="parent">
        <div class="list">
          <div class="rect">
            <div class="flag"></div>
          </div>
        </div>
        <div class="parent">
          <div class="list">
            <div class="rect">
              <div class="flag"></div>
              <div class="text">转让</div>
            </div>
          </div>
          <div class="list" style="margin-top:20px">
            <div class="rect">
              <div class="flag"></div>
            </div>
          </div>
        </div>
        <div class="list" style="margin-top:20px">
          <div class="rect">
            <div class="flag"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        list: [{
          id: 0,
          name: '原始开立方',
          children: [{
            id: 1,
            name: "第一次开立方",
            children: [{
              id: 3,
              name: "第二次开立方",
            }, {
              id: 4,
              name: "第二次开立方",
            }]

          }, {
            id: 2,
            name: "第一次开立方",
          }]
        }]
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
