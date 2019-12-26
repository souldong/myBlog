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
        <section>top10</section>
        <section>标签</section>
      </aside>
    </div>
  </div>
</template>
<script>
import mArticle from '@/components/article.vue'
export default {
  components: {
    mArticle
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/views/blog.less";
</style>
