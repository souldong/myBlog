<template>
  <div class="m-article">
    <article :class="['article-container', index % 2 === 0 ? 'article-active' : '']" v-for="( item, index ) in articleList" :key="index">
      <div class="container-img">
        <img :src="articleItem.image" :alt="articleItem.title">
      </div>
      <div class="container-text">
        <p class="start-time">
          <Icon type="ios-alarm-outline" />
          &nbsp;&nbsp;Released&nbsp;{{articleItem.time}}
        </p>
        <h3 class="container-text-title">{{articleItem.title}}</h3>
        <div class="_1IC5o">
          <span><Icon type="ios-eye-outline" />&nbsp;&nbsp;&nbsp;&nbsp;{{articleItem.PV}} PV</span>
          <span class="cur"><Icon type="ios-chatboxes-outline" />&nbsp;&nbsp;&nbsp;&nbsp;{{articleItem.like}} Likes</span>
          <span class="cur"><Icon type="ios-folder-outline" />&nbsp;&nbsp;&nbsp;&nbsp;{{articleItem.languageType}}</span>
        </div>
        <p class="text">{{articleItem.detaile}}</p>
        <div class="more"><Icon type="ios-more" /></div>
      </div>
    </article>
  </div>
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
      articleItem: {
        time: '2019-11-25 22:19:07',
        title: '[正则表达式系列] 字符匹配 ',
        PV: 8,
        like: 57,
        languageType: 'javascript',
        url: '/blog',
        image: 'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/108882/11/1297/67874/5dfc6cdbE480dc50c/0cd5d4e5e16d2a89.jpg.webp',
        detaile: '正则表达式是用于匹配字符串中字符组合的模式，在计算机科学的各个方面都有它的身影，然而学习它却是一件枯燥而困难的事情。得怀于老姚的 《JavaScript 正则表达式迷你书》，内容凝练且有深度，故这次下决心要攻破之。本系列为《JavaScript 正则表达式迷你书》的读书笔记，旨在今后能够游刃有余的使用正则表达式。'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../styles/components/article.less';
</style>
