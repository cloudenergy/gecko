<template>
  <div>
    <p>{{title}}</p>
    <div class="flex between">
      <span>最后更新: {{transformDate(date)}}</span>
      <div class="flex date-choose">
        <span v-for="(item, index) in list" :key="index" @click="chooseDate(item.key, index)" :class="{active:activeNum===index}" class="point">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    date: {
      required: true
    }
  },
  data() {
    return {
      activeNum:1,
      list: [
        {title:'最近一月',key:'month'},
        {title:'最近一年',key:'year'},
        {title:'更久',key:'long'},
      ]
    } 
  },
  methods: {
    transformDate(val) {
      return val
    },
    chooseDate(key, index) {
      this.$set(this, 'activeNum', index)
      this.$emit('chooseDate', key)
    }
  }
}
</script>

<style lang="less" scoped>
  .between {
    justify-content: space-between;
    .date-choose {
      span {
        margin-left: 20px;
      }
      .active {
        color: @theme;
        border-bottom: 2px solid @theme;
        padding-bottom: 2px;
      }
    }
  }
</style>
