<template>
  <div>
    <div class="blog-li" @click="blogDetail(id)">
      <el-row>
        <el-col :span="22">{{title}}</el-col>
        <el-col :span="1">点赞</el-col>
        <el-col :span="1">收藏</el-col>
      </el-row>
      <el-row style="margin-top: 10px; color: #8a8a8a; font-size: 14px; line-height: 24px">
        <el-col :span="24">{{abstracts}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default{
  name: 'BlogLi',
  data () {
    return {
      content: null,
      editorOption: {}
    }
  },
  methods: {
    blogDetail (id) {
      this.$router.push({name: 'BlogDetail', query: {id: id}})
    }
  },
  props: ['title', 'abstracts', 'id']
}
</script>

<style>
  .blog-li{
    border-bottom: 1px solid #f4f4f4;
    padding: 18px 24px 13px 24px;
    background: #fff;
    cursor: pointer;
  }
</style>
