<template>
  <div class="news">
    <div v-for="(item, index) in list" :key="index" class="list point" @click="toggle(index, .2)">
      <h3 class="title flex">
        <span>{{item.title}}</span>
        <span class="date">
          <i class="el-icon-time"></i> 5分钟前</span>
      </h3>
      <div class="content">
        <div :id="index">
          <p>{{item.content}}</p>
          <a @click.stop="link()" class="link flex"><icon type="insertlink"/><span>我要开始跳转了</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        expandedId: null,
        list: [{
            title: '迷路老人求助遭呛声“关我们啥事” 涉事民警被停职调查',
            content: '据封面新闻消息，5月13日上午，一条拍摄地为四川绵竹的短视频在朋友圈流传，视频中，一位找不到家的老大爷向民警求助，民警出言不逊：“关我们啥子事情”。当天下午，绵竹市公安局通过官博发布通告承认，有民警“在处警过程中存在言语、行为不规范，方法简单粗暴问题”，但也强调，求助的酒后迷失老人，已被民警安全送至家中。目前，当事民警已被停止执行职务，接受进一步调查。警察的忙和累，是真实的。各种事情，不同诉求，纷扰麻烦，都需要调处、安顿、梳理。每一条指令，都牵扯着一段不一样的人生；每一个求助者，都会有一个急切的情由。琐碎的工作不仅会填满警察的每一个工作日，也会主导警察的情绪。类似的感受，相信很多警察都有很深刻的体会。在这个过程中，产生一些负面情绪，甚至有一些不当的言行，并非完全不可理解。'
          },
          {
            title: '迷路老人求助遭呛声“关我们啥事” 涉事民警被停职调查',
            content: '据封面新闻消息，5月13日上午，一条拍摄地为四川绵竹的短视频在朋友圈流传，视频中，一位找不到家的老大爷向民警求助，民警出言不逊：“关我们啥子事情”。当天下午，绵竹市公安局通过官博发布通告承认，有民警“在处警过程中存在言语、行为不规范，方法简单粗暴问题”，但也强调，求助的酒后迷失老人，已被民警安全送至家中。目前，当事民警已被停止执行职务，接受进一步调查。警察的忙和累，是真实的。各种事情，不同诉求，纷扰麻烦，都需要调处、安顿、梳理。每一条指令，都牵扯着一段不一样的人生；每一个求助者，都会有一个急切的情由。琐碎的工作不仅会填满警察的每一个工作日，也会主导警察的情绪。类似的感受，相信很多警察都有很深刻的体会。在这个过程中，产生一些负面情绪，甚至有一些不当的言行，并非完全不可理解。'
          },
          {
            title: '迷路老人求助遭呛声“关我们啥事” 涉事民警被停职调查',
            content: '据封面新闻消息，5月13日上午，一条拍摄地为四川绵竹的短视频在朋友圈流传，视频中，一位找不到家的老大爷向民警求助，民警出言不逊：“关我们啥子事情”。当天下午，绵竹市公安局通过官博发布通告承认，有民警“在处警过程中存在言语、行为不规范，方法简单粗暴问题”，但也强调，求助的酒后迷失老人，已被民警安全送至家中。目前，当事民警已被停止执行职务，接受进一步调查。警察的忙和累，是真实的。各种事情，不同诉求，纷扰麻烦，都需要调处、安顿、梳理。每一条指令，都牵扯着一段不一样的人生；每一个求助者，都会有一个急切的情由。琐碎的工作不仅会填满警察的每一个工作日，也会主导警察的情绪。类似的感受，相信很多警察都有很深刻的体会。在这个过程中，产生一些负面情绪，甚至有一些不当的言行，并非完全不可理解。'
          },
          {
            title: '迷路老人求助遭呛声“关我们啥事” 涉事民警被停职调查',
            content: '据封面新闻。'
          },
        ]
      }
    },
    methods: {
      link() {
        console.log(1)
        window.open("http://www.w3school.com.cn")
      },
      // toggle
      toggle(val, time) {
        if (val === this.expandedId && document.getElementById(val).style.height !== '39px') {
          document.getElementById(val).style.height = '39px'
        } else {
          this.expandedId===null?'':document.getElementById(this.expandedId).style.height = '39px'
          this.$set(this, 'expandedId', val)
          let dom = document.getElementById(val);
          let style = window.getComputedStyle(dom);
          if (style.height === '39px') {
            let height = style.height;
            dom.style.height = "auto";
            var targetHeight = window.getComputedStyle(dom).height;
            dom.style.height = height;
            setTimeout(() => {
              dom.style.height = targetHeight;
            })
          } else {
            dom.style.height = '39px';
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .news {
    background: #fff;
    padding: 40px;
    .list:hover {
      color: @theme  !important;
      .content {
        color: @theme  !important;
      }
    }
    .link:hover {
      color: @theme !important;
    }
    .list {
      margin-bottom: 20px;
      background-color: @lightGray;
      box-shadow: 3px 3px 5px #eee;
      .title {
        padding: 10px;
        border-bottom: 1px solid @border;
        justify-content: space-between;
        .date {
          font-weight: 300;
          color: #7F7D80;
        }
      }
      .content {
        width: 60%;
        padding: 10px 0 10px 10px;
        color: #7F7D80;
        >div {
          height: 39px;
          overflow: hidden;
          transition: height .2s ease;
          .link {
            color:#7F7D80;
            display: inline-block;
            margin-top: 40px;
            line-height: 16px;
          }
        }
      }
    }
  }
</style>