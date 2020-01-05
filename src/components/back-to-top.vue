<template>
  <div class="back-to-top" id="backToTop" @click="toTop">回到顶部</div>
</template>

<script>
export default {
  created() {
    this.detectionScroll()
  },
  methods: {
    detectionScroll() {
      window.addEventListener('scroll', function(e) {
        console.log(document.body.scrollTop)
        const backToTop = document.getElementById('backToTop')
        const windowH = document.body.clientHeight
        const srcollH = e.target.scrollTop
        if (windowH + 100 < srcollH) {
          backToTop.style.top = -900 + windowH * 0.9 + 'px'
        } else {
          backToTop.style.top = '-900px'
        }
      }, true)
    },
    toTop() {
      scrollTo(0, 0)
      console.log(document.body.scrollTop)
    }
  }
}
</script>

<style lang="less" scoped>
  .back-to-top{
    background-color: #fff;
    position: fixed;
    z-index: 1;
    background: url('../assets/images/back-to-top.png') no-repeat 0 0;
    width: 70px;
    height: 900px;
    background-position: bottom;
    top: -900px;
    right: 25px;
    transition: 600ms all cubic-bezier(0.25, 0.1, 0.3, 1.5);
    outline: none;
  }
</style>
