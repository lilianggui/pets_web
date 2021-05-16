<template>
  <div v-html="content" :key="this.$route.query.id">
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'BlogDetail',
  data () {
    return {
      content: ''
    }
  },
  activated () {
    let id = this.$route.query.id
    let url = 'http://127.0.0.1:8080/blogDetail?id=' + id
    axios.get(encodeURI(url))
      .then(response => {
        this.content = response.data.data.content
      })
  },
  methods: {
  }
}
</script>

<style>
</style>
