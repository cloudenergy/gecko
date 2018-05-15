<template>
  <div>
    <p>电报群</p>
    <div class="flex middle">
      <echarts-bar :value="1" :title="'title'" />
      <echarts-bar :value="2" :title="'title'" />
    </div>
    <p>推特</p>
    <div>
      <div class="flex middle">
        <echarts-bar :value="3" :title="'title'" />
        <echarts-bar :value="4" :title="'title'" />
      </div>
      <div class="flex middle">
        <echarts-bar :value="5" :title="'title'" />
        <echarts-bar :value="6" :title="'title'" />
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    comments: {}
  }
</script>

<style lang="less" scoped>
  .middle {
    justify-content: space-around;
    padding-top: 30px;
  }
</style>
