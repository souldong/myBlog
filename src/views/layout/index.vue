
<template>
  <div class="layout">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>
<script>
import MyHeader from '@/components/m-header.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/layout/index.less';
</style>
