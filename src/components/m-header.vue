<template>
  <div class="m-head">
    <h2 class="title">
      <span v-for="item in text" :key="item.index">{{ item }}</span>
    </h2>
    <nav>
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          <router-link :to="item.url">
            <Icon :type="item.icon" />
            <span v-text="item.name"></span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '浅笑轻吟梦一曲',
      menuList: [
        { icon: 'ios-home', name: 'Home', url: '/home' },
        { icon: 'md-infinite', name: 'Blog', url: '/blog' },
        { icon: 'ios-archive', name: 'Archive', url: '/archive' },
        { icon: 'md-musical-note', name: 'Music', url: '/music' },
        { icon: 'ios-appstore', name: 'Apps', url: '/apps' }
      ]
    }
  },
  methods: {
    toPage(item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../styles/components/header.less";
</style>
