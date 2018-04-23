<template>
  <div>
    <div class="gecko-info flex aline">
      <div class="set-margin">
        <div class="flex aline top-bar">
          <div>
            您好，欢迎来到壁虎漫步数字资产资讯平台
          </div>
          <div class="flex">
            <div>select</div>
            <div>select</div>
          </div>
        </div>
      </div>
    </div>
    <div class="icon flex aline">
      <div class="image flex aline">
        <img src="../../static/imgs/icon.png"/>
        <img src="../../static/imgs/walking.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .gecko-info {
    border-bottom: 1px solid #6388B3;
    background: @deepBlue;
    color: #E1EBF6;
    height: 40px;
    .set-margin {
      width: 1850px;
      margin: 0 auto;
      .top-bar {
        justify-content: space-between;
      }
    }
  }
  .icon {
    background: @deepBlue;
    height: 78px;
    .image {
    height: 78px;
    width: 1850px;
    margin: 0 auto;
    img {
      height: 40px;
    }
    img:first-child {
      margin-right: 10px;
    }
  }
  }
  
</style>