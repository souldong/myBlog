<template>
  <div class="m-head">
    <h2 class="title">
      <span v-for="item in text" :key="item.index">{{ item }}</span>
    </h2>
    <Menu mode="horizontal" active-name="1">
      <MenuItem v-for="(item, index) in menuList" :key="index" :name="index" @click.native="toPage(item)">
        <Icon type="ios-paper" />{{ item.name }}
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "浅笑轻吟梦一曲",
      menuList: [
        {name: '首页', url: '/home'},
        {name: '文章', url: '/article'},
        {name: '案例', url: '/project'},
        {name: '留言', url: '/messageboard'},
        {name: '关于', url: '/about'},
      ]
    };
  },
  methods:{
    toPage( item ){
      this.$router.push( item.url );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/components/header.less";
</style>