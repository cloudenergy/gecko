<template>
  <div>
    <top-nav :link="link" @tabChange="tabChange" />
    <searchHeat />
    <includedNumber />
  </div>
</template>
<script>
  import {
    searchHeat,
    includedNumber
  } from '~/modules/heat'
  export default {
    created() {},
    computed: {},
    components: {
      searchHeat,
      includedNumber
    },
    data() {
      return {
        link: [{
          name: '公共关注度'
        }],
        index: 0
      };
    },
    methods: {
      tabChange(val) {
        this.$set(this, 'index', val);
      }
    }
  };
</script>
<style>
  .select {
    background-color: #fff;
  }
</style>