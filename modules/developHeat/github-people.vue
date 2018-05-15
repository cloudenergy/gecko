<template>
  <div>
    <p>github开发人员</p>
    <p>更新时间：2018-04-15 12：34</p>
    <div class="flex github-people">
      <heat-curve :value="'first'"/>
      <heat-curve :value="'second'"/>
      <heat-curve :value="'third'"/>
      <heat-curve :value="'fourth'"/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .github-people {
    justify-content: space-around;
  }
</style>
