<template>
  <div>
    <el-row class="a-row">
      <el-col :span="22" style="color: green">在线人数：{{onlineCount}}</el-col>
    </el-row>
    <el-row class="a-row">
      <el-col :span="22">
<!--        <el-input v-model="message" type="textarea" rows="18" :disabled="true"></el-input>-->
        <div class="message-view" v-html="message">
        </div>
      </el-col>
    </el-row>
    <el-row class="a-row">
      <el-col :span="14">
        <el-input v-model="inp" type="textarea" rows="6"
                  @keyup.enter.native="sendMessage"></el-input>
      </el-col>
      <el-col :span="4" style="line-height: 233px; margin-left: 10px">
        <el-button size="medium" round type="primary"
                   @click="sendMessage">发送</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'ChatRoom',
  data () {
    return {
      inp: '',
      message: '',
      onlineCount: 0,
      websocket: null
    }
  },
  created () {
    let that = this
    let userInfoJSON = localStorage.getItem('userInfo')
    if (!userInfoJSON) {
      this.$router.push({
        path: '/'
      })
    }
    let user = JSON.parse(userInfoJSON)
    let websocket = new WebSocket('ws://localhost:8080/webSocketBySpring/customWebSocketHandler' +
      '?mchNo=' + user.id + '&userName=' + user.userName + '&nickName=' + user.nickName)
    this.websocket = websocket
    websocket.onerror = function () {
      console.log('连接失败！')
    }
    websocket.onopen = function () {
      console.log('连接成功！')
    }
    websocket.onmessage = function (event) {
      let msgData = event.data
      let msg = JSON.parse(msgData)
      if (msg.onlineCount) {
        that.onlineCount = msg.onlineCount
      }
      if (msg.message) {
        let fromMessage = `<div style="width: 100%; opacity: 1">
            <span>${msg.from}：${msg.message}</span>
            <span style="float: right; color: #888888; font-size: 14px">${msg.sendTime}</span>
          </div>`
        that.message = that.message + fromMessage
      }
    }
  },
  destroyed () {
    if (this.websocket) {
      this.websocket.close()
    }
  },
  methods: {
    getToAllUserMessage (msg) {
      let message = {
        to: 'all',
        msg: msg
      }
      return JSON.stringify(message)
    },
    sendMessage () {
      this.websocket.send(this.getToAllUserMessage(this.inp))
      this.inp = ''
    }
  }
}
</script>

<style scoped>
  .a-row{
    margin-bottom: 12px;
  }
  .message-view{
    width: 85%;
    height: 400px;
    border: solid 1px #cccccc;
    background-image: url("../assets/loginbg.jpeg");
    background-repeat:no-repeat ;
    background-size:100% 100%;
    color: #e6e6e6;
    padding: 10px;
    opacity: 0.8;
    overflow-y: scroll;
  }
</style>
