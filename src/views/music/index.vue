<template>
  <div class="music">
    <section class="background">
      <span>Music</span>
    </section>
    <section class="SE0fn">
      Music
    </section>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.background {
  position: relative;
  display: flex;
  background: url("../../assets/images/music_page_header.webp") no-repeat;
  justify-content: center;
  padding-top: 15rem;
  width: 100%;
  height: 68vh;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  span{
    position: absolute;
    bottom: 50px;
    left: 50%;
    font-weight: bolder;
    font-size: 34px;
    font-family: -apple-system;
    transform: translate(-50%, 0);
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
</style>
