<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input v-model="inp" type="textarea" rows="16" placeholder="请在这里输入JSON串"></el-input>
      </el-col>
      <el-col :span="10" style="margin-left: 20px">
        <el-tree :data="jsonFormatData" :props="defaultProps"></el-tree>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-button type="primary" @click="jsonFormat">格式化</el-button>
      <el-button type="danger" @click="clearInfo">清空</el-button>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'JSONFormat',
  data () {
    return {
      inp: '',
      res: '',
      jsonFormatData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    jsonFormat () {
      let url = 'http://127.0.0.1:8080/jsonFormat?inp=' + this.inp
      axios.get(encodeURI(url))
        .then(response => {
          this.jsonFormatData = response.data.data
        })
    },
    clearInfo () {
      this.inp = ''
      this.res = ''
    }
  }
}
</script>

<style scoped>

</style>
