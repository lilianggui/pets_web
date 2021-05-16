<template>
  <div>
    <router-link class="web-name" to='/HomePage' tag="span">Pets</router-link>
    <div class="web-quit" @click="quit"><span>退出</span></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  methods: {
    quit () {
      this.$confirm('即将退出登录, 真的要走嘛?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let url = 'http://127.0.0.1:8080/logout'
        let data = this.form
        axios.post(url, data).then(res => {
          this.$router.push({name: 'Login'})
        })
      })
    }
  }
}
</script>

<style scoped>
  .web-name{
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }
  .web-quit{
    float: right;
    cursor: pointer;
  }
</style>
