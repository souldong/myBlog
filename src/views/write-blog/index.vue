<template>
  <div class='markdown'>
    <input class="myblog-input" type="text" v-model="blogTitle" placeholder="请输入文章标题...">
    <div class="myblog-publish">发布</div>
    <!-- <Button type="primary">发布</Button> -->
    <mavon-editor
      v-model='content'
      ref='md'
      @imgAdd='$imgAdd'
      @change='change'
      style='height: calc( 100vh - 60px)'
    />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: '',
  props: [],
  components: {
    mavonEditor
  },
  data() {
    return {
      content: '我是内容',
      html: '',
      configs: {},
      blogTitle: ''
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      const formdata = new FormData()
      this.$upload
        .post('/上传接口地址', formdata)
        .then(res => {
          console.log(res.data)
          this.$refs.md.$img2Url(pos, res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit() {
      console.log(this.content)
      console.log(this.html)
      this.$message.success('提交成功，已打印至控制台！')
    }
  },
  mounted() {}
}
</script>

<style lang='less' scoped>
.markdown {
  position: relative;
  height: 100%;
  background-color: #fff;
  > .myblog-input{
    font-weight: 700;
    color: #000;
    border: none;
    display: inline-block;
    width: calc(100% - 130px);
    height: 60px;
    line-height: 60px;
    text-indent: 30px;
    font-size: 28px;
    outline: none;
  }
  > .myblog-publish{
    display: inline-block;
    width: 130px;
    text-align: center;
    line-height: 60px;
    color: #007fff;
    cursor: pointer;
  }
}
</style>
