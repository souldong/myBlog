<template>
  <div class="left-layout">
    <div class="logo">
      <h2 class="title">
        <span v-for="item in text" :key="item.index">{{ item }}</span>
      </h2>
    </div>
    <my-menu :menuList="menuList"></my-menu>
  </div>
</template>

<script>
import myMenu from './component/myMenu.vue';
export default {
  name: 'leftLayout',
  components: {
    myMenu
  },
  data(){
    return{
      text: '浅笑轻吟梦一曲',
      menuList: [
        {label: 'Osite.com', icon: 'md-globe', url: '/OsiteCom', level: 1},
        {label: 'Anilitycs', icon: 'ios-briefcase', url: '/dashboard', level: 1, children: [
          {label: 'Dashboard', icon: '', url: '/dashboard'},
          {label: 'Stats', icon: '', url: '/stats'},
          {label: 'Advertising', icon: '', url: '/advertising'}
        ]},
        {label: 'Setups', icon: 'ios-laptop', url: '/customizations', level: 1, children: [
          {label: 'Customizations', icon: '', url: '/customizations'},
          {label: 'Integrations', icon: '', url: '/integrations'},
          {label: 'Add Domain', icon: '', url: '/addDomain'}
        ]},
        {label: 'Notifications', icon: 'md-notifications', url: '/notifications', level: 1},
        {label: 'Logout', icon: 'md-power', url: '/logout', level: 1},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/layout/left-layout.less';
</style>