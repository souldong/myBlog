
<template>
  <div class="home">
    <section class="background">
      <h1 class="_3hviM">
        <span class="hvr-wobble-top">HI,COMIMI!</span>
      </h1>
      <div class="inform">
        <span class="inform-text">🎄 Love everyone, every leaf, every ray of light. 🔔</span>
      </div>
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
      ></vue-particles>
    </section>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
@import "../../styles/views/home.less";
</style>
