
<template>
  <div class="home">
    <section class="background">
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        class="lizi"
      >
      </vue-particles>
    </section>
    <div class="oSTAh">
      <h1 class="_3hviM" data-value="HI,COMIMI">HI,COMIMI</h1>
    </div>
    <!-- <section class="SE0fn">
      <router-view></router-view>
    </section> -->
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.background {
  // position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url("../../assets/images/sea.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  transition: 1s opacity linear;
}
.oSTAh{
  position: absolute;
  top: 380px;
  left: 0px;
  right: 0px;
  ._3hviM{
    position: relative;
    font-size: 88px;
    color: #fff;
    text-align: center;
    transition: all 400ms ease;
    background: linear-gradient(to left, #c4987a 33%, #ffd5bf 73%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-font-smoothing: antialiased;
  }
}
.SE0fn {
  padding: 10rem;
}
@keyframes _2NKHA{
}
</style>
