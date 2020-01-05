<template>
  <div class="archive">
    <section class="background">
      <span>Archive</span>
    </section>
    <section class="SE0fn">
      <Timeline>
        <TimelineItem>
          <p class="time">1976年</p>
          <p class="content" @click="toArticle">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">1984年</p>
          <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2007年</p>
          <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2010年</p>
          <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2011年</p>
          <p class="content">10月5日</p>
          <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
      </Timeline>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    toArticle() {
      window.open('http://www.baidu.com', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.background {
  position: relative;
  display: flex;
  background: url("../../assets/images/NZqlumt.webp") no-repeat;
  justify-content: center;
  padding-top: 15rem;
  width: 100%;
  height: 68vh;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  span {
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
  margin: 20px auto;
  max-width: 800px;
}
.ivu-timeline-item {
  width: calc(100% - 80px);
  margin: 0 !important;
  padding: 0 0 12px 0;
  list-style: none;
  position: relative;
  left: 80px;
}
.time {
  position: relative;
  left: -80px;
  font-size: 14px;
  font-weight: bold;
}
.content {
  cursor: pointer;
  padding-left: 5px;
}
</style>
