<template>
  <div>
    <el-row style="height: 50px; border-bottom: 1px solid #f4f4f4;">
      <el-button type="primary" size="medium"
                 style="position: absolute; right: 10px" @click="writeBlog">
        写博客
      </el-button>
    </el-row>
    <blog-li v-for="item in blogList" :key="item.id"
             :title="item.title"
             :abstracts="item.title"
             :id="item.id">
    </blog-li>
  </div>
</template>

<script>
import axios from 'axios'
import BlogLi from './BlogLi'
export default{
  data () {
    return {
      blogList: []
    }
  },
  activated () {
    let url = 'http://127.0.0.1:8080/listBlog'
    axios.get(encodeURI(url))
      .then(response => {
        this.blogList = response.data.data
      })
  },
  methods: {
    writeBlog () {
      this.$router.push('/AddBlog')
    }
  },
  components: {
    'blog-li': BlogLi
  }
}
</script>

<style>
</style>
