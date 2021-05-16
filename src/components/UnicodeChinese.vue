<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input v-model="inp" type="textarea" rows="14" placeholder="请在这里输入中文或Unicode"></el-input>
      </el-col>
      <el-col :span="10" style="margin-left: 20px">
        <el-input type="textarea" rows="14" v-model="res"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-button size="medium" round type="primary" @click="chinese2Unicode">中文转Unicode</el-button>
      <el-button size="medium" round type="primary" @click="unicode2Chinese">Unicode转中文</el-button>
      <el-button size="medium" round type="danger" @click="clearInfo">清空</el-button>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UnicodeChinese',
  data () {
    return {
      inp: null,
      res: null
    }
  },
  methods: {
    chinese2Unicode () {
      axios.get('http://127.0.0.1:8080/chinese2Unicode?inp=' + this.inp)
        .then(response => (
          this.res = response.data.data
        ))
    },
    unicode2Chinese () {
      let url = 'http://127.0.0.1:8080/unicode2Chinese?inp=' + this.inp
      axios.get(encodeURI(url))
        .then(response => (
          this.res = response.data.data
        ))
    },
    clearInfo () {
      this.inp = null
      this.res = null
    }
  }
}
</script>

<style scoped>

</style>
