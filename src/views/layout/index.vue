
<template>
  <div class="layout">
    <my-header></my-header>
    <!-- <Layout>
      <Content></Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>-->
    <section class="background"></section>
    <section class="SE0fn">123
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import MyHeader from "@/components/m-header.vue";
export default {
  components: {
    MyHeader
  }
};
</script>

<style lang="less" scoped>
  @import '../../styles/layout/index.less';
</style>