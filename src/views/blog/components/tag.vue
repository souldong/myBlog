<template>
  <section class="m-tag">
    <h1 class="title">
      <Icon type="md-pricetags" />
      <span class="text">Tags</span>
    </h1>
    <ul class="tag-container">
      <li v-for="(item, index) in tags" :key="index"><a href="javascript:void(0)" class="tag">{{item}}</a></li>
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
      tags: ['javascript', 'Git', 'CSS3', 'HTML5', 'node.js', 'react', 'vue', 'flex']
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../styles/views/blog/tag.less';
</style>
