<template>
  <nav class="menu">
    <div v-for="(item, index) in menuList" :key="index" @click="menu(index)"
       :class="[menuInd == index && !item.children ? 'active' : '']"
      >
      <div class="menu-submenu">
        <span class="menu-line"></span>
        <Icon :type="item.icon" /> 
        <!-- <a href="#" class="menu-submenu-label">{{ item.label }} {{ menuInd }}</a> -->
        <router-link class="menu-submenu-label" :to="item.url">{{ item.label }}</router-link>
      </div>
      <my-menu :menuList="item.children"></my-menu>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'myMenu',
  props: {
    menuList: {
      type: Array,
      default: () =>{
        return []
      }
    }
  },
  data(){
    return {
      menuInd: this.menuList.length + 1,
    }
  },
  methods:{
    menu (ind){
      this.menuInd = ind;
    }
  }
};
</script>

<style lang="less" scoped>
  @import url('../../../styles/layout/component/menu.less');
</style>