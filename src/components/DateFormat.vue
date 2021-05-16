<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input v-model="inp" type="textarea" rows="7"
                  placeholder="请输入时间戳或日期"></el-input>
      </el-col>
      <el-col :span="10" style="margin-left: 20px">
        <el-input type="textarea" rows="7" v-model="res"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-button size="medium" type="primary" @click="timestampToDate">时间戳转日期</el-button>
      <el-button size="medium" type="primary" @click="dateToTimestamp">日期转时间戳</el-button>
      <el-button size="medium" type="primary" @click="currentDate">当前日期</el-button>
      <el-button size="medium" type="danger" @click="clearInfo">清空</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DateFormat',
  data () {
    return {
      inp: '',
      res: ''
    }
  },
  methods: {
    timestampToDate () {
      let date = new Date(parseInt(this.inp))
      let month = date.getMonth() + 1
      let day = date.getDate()
      this.res = date.getFullYear() + '-' +
        (month < 10 ? '0' + month : month) + '-' +
        (day < 10 ? '0' + day : day)
    },
    dateToTimestamp () {
      let dateArr = this.inp.split('-')
      let date = new Date()
      date.setFullYear(parseInt(dateArr[0]))
      date.setMonth(parseInt(dateArr[1]) - 1)
      date.setDate(parseInt(dateArr[2]))
      this.res = date.getTime()
    },
    currentDate () {
      let date = new Date()
      let month = date.getMonth() + 1
      let day = date.getDate()
      this.inp = date.getFullYear() + '-' +
        (month < 10 ? '0' + month : month) + '-' +
        (day < 10 ? '0' + day : day)
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
