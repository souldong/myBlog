<template>
  <div class="bolg">
    <section class="background">
      <span>Tech, Music and Life.</span>
    </section>
    <div class="SE0fn">
      <section>
        <m-article :articleList="10"></m-article>
      </section>
      <aside>
        <m-top :articleList="5"></m-top>
        <m-tag></m-tag>
      </aside>
    </div>
  </div>
</template>
<script>
import mArticle from './components/article.vue'
import mTop from './components/top.vue'
import mTag from './components/tag.vue'
export default {
  components: {
    mArticle, mTop, mTag
  }
}
</script>

<style lang="less" scoped>
 @import "../../styles/views/blog.less";
</style>
