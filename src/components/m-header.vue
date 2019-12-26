<template>
  <div class="m-head">
    <h2 class="title">
      <!-- <span v-for="item in text" :key="item.index">{{ item }}</span> -->
      <a href="#" class="logo"></a>
    </h2>
    <nav>
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          <router-link :to="item.url" :class="item.class">
            <Icon :type="item.icon" :class="item.iClass"/>
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
        { class: 'hvr-icon-wobble-horizontal', iClass: 'fa fa-arrow-right hvr-icon', icon: 'ios-home', name: 'Home', url: '/home' },
        { class: 'hvr-icon-drop', iClass: 'fa fa-tint hvr-icon', icon: 'md-infinite', name: 'Blog', url: '/blog' },
        { class: 'hvr-icon-up', iClass: 'fa fa-arrow-circle-o-up hvr-icon', icon: 'ios-archive', name: 'Archive', url: '/archive' },
        { class: 'hvr-icon-bounce', iClass: 'fa fa-thumbs-o-up hvr-icon', icon: 'md-musical-note', name: 'Music', url: '/music' },
        { class: 'hvr-icon-pulse-shrink', iClass: 'fa fa-home hvr-icon', icon: 'ios-appstore', name: 'Apps', url: '/apps' }
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      window.addEventListener('scroll', function(e) {
        if (e.target.scrollTop > 0) {
          document.getElementsByClassName('m-head')[0].classList.add('head-active')
        } else {
          document.getElementsByClassName('m-head')[0].classList.remove('head-active')
        }
      }, true)
    },
    toPage(item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../styles/components/header.less";
</style>
