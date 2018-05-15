<template>
  <div>
    <p>github代码状况</p>
    <p>更新时间：2018-04-15 12：34</p>
    <p>分支 16</p>
    <p>总提交数 8826</p>
    <p>最近一次提交 2018-04-13</p>
    <p>GitHub创建时间 2017-02-02</p>
    <githubCodeEchart :value="'1'" style="margin: 0 auto"/>
  </div>
</template>

<script>
import githubCodeEchart from './github-code-echart'
export default {
  components: {
    githubCodeEchart
  }
}
</script>

