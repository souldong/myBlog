
<template>
  <div class="layout">
    <my-header v-show="isShowHead"></my-header>
    <back-to-top></Back-to-top>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MyHeader from '@/components/m-header.vue'
import BackToTop from '@/components/back-to-top.vue'
export default {
  components: {
    MyHeader, BackToTop
  },
  data() {
    return {
      isShowHead: true
    }
  },
  watch: {
    $route(v) {
      if (v.name === 'write') {
        this.isShowHead = false
      } else {
        this.isShowHead = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/layout/index.less';
</style>
