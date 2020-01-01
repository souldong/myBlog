<template>
  <section class="m-top">
    <h1 class="title">
      <Icon type="ios-thumbs-up" />
      <span class="text">Top 5 Most Viewed</span>
    </h1>
    <ul class="top-list">
      <li class="item" v-for="i in 5" :key="i">
        <span class="item-text">
          <span class="title">{{topItem.title}}</span>
          <span class="text">{{topItem.url}}</span>
        </span>
        <span class="item-img">
          <img :src="topItem.img" alt="">
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    articleList: {
      // type: Array,
      default: () => { [] }
    }
  },
  data() {
    return {
      topItem: {
        title: 'Grid Layout',
        url: 'https://yanceyleo.com/p/5bc202a26b48dfee0a0dcedf',
        img: 'https://img13.360buyimg.com/babel/s380x420_jfs/t1/87547/13/8402/35321/5e04475fEa97bfdbd/740f15d413dfc3a4.png!cc_190x210.webp'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../styles/views/blog/top.less';
</style>
