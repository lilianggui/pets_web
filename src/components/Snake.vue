<template>
  <div>
    <el-row class="a-row">
      <el-col :span="10" style="color: green">分数：{{score}}</el-col>
    </el-row>
    <el-row class="a-row">
      <el-col :span="22">
        <div class="message-view">
          <div class="snake" style="display: inline-block" v-html="snake_html"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22">
        <el-button @click="start">开始</el-button>
        <el-button @click="stop">暂停</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'ChatRoom',
  data () {
    return {
      score: 0,
      snake_html: '',
      snakeBody: [
        {color: 'red'}
      ],
      colorArr: ['red', 'blue', 'green'],
      snakeBlockWidth: 10,
      snakeBlockHeight: 10,
      interval: 0,
      is_start: false,
      is_dead: false,
      step: 10,
      time_interval: 200,
      turn_arr: [],
      food_p: {
        color: 'red',
        left: Math.floor(Math.random() * 900 / 10) * 10,
        top: Math.floor(Math.random() * 400 / 10) * 10
      },
      snake_head_p: {
        direction: 'right',
        left: 200,
        top: 120
      }
    }
  },
  created () {
    this.drawSnake()
    document.onkeydown = this.keyDown
  },
  methods: {
    keyDown (e) {
      let e1 = e || event || window.event
      let direction = ''
      if (e1 && e1.keyCode === 32) {
        if (this.is_start) {
          this.stop()
        } else {
          this.start()
        }
        return
      } else if (e1 && (e1.keyCode === 37 || e1.keyCode === 74 || e1.keyCode === 65)) {
        // 左
        direction = 'left'
      } else if (e1 && (e1.keyCode === 38 || e1.keyCode === 73 || e1.keyCode === 87)) {
        // 上
        direction = 'up'
      } else if (e1 && (e1.keyCode === 39 || e1.keyCode === 76 || e1.keyCode === 68)) {
        // 右
        direction = 'right'
      } else if (e1 && (e1.keyCode === 40 || e1.keyCode === 75 || e1.keyCode === 83)) {
        // 下
        direction = 'down'
      }
      if (!this.is_start || !direction || direction === this.snake_head_p.direction ||
        this.fanDirection(direction, this.snake_head_p.direction)) {
        return
      }
      this.turn_arr.unshift({
        direction: this.snake_head_p.direction,
        left: this.snake_head_p.left,
        top: this.snake_head_p.top
      })
      this.snake_head_p.direction = direction
    },
    fanDirection (d1, d2) {
      switch (d1) {
        case 'right':
          return d2 === 'left'
        case 'left':
          return d2 === 'right'
        case 'up':
          return d2 === 'down'
        case 'down':
          return d2 === 'up'
      }
    },
    drawSnake () {
      this.snake_html = ''
      let lastBlock = {
        direction: this.snake_head_p.direction,
        left: this.snake_head_p.left,
        top: this.snake_head_p.top,
        turn_idx: 0
      }
      this.snakeBody[0].direction = this.snake_head_p.direction
      for (let i = 0; i < this.snakeBody.length; i++) {
        let left = this.snake_head_p.left
        let top = this.snake_head_p.top
        let turnPoint = this.turn_arr[lastBlock.turn_idx]
        this.snakeBody[i].direction = lastBlock.direction
        this.snakeBody[i].turn_idx = lastBlock.turn_idx
        switch (lastBlock.direction) {
          case 'right':
            left = lastBlock.left - this.snakeBlockWidth
            top = lastBlock.top
            if (turnPoint && turnPoint.left > left) {
              left = lastBlock.left
              top = turnPoint.direction === 'down' ? lastBlock.top - this.snakeBlockHeight : lastBlock.top + this.snakeBlockHeight
              this.snakeBody[i].direction = turnPoint.direction
              this.snakeBody[i].turn_idx = lastBlock.turn_idx + 1
            }
            break
          case 'left':
            left = lastBlock.left + this.snakeBlockWidth
            top = lastBlock.top
            if (turnPoint && turnPoint.left < left) {
              left = lastBlock.left
              top = turnPoint.direction === 'down' ? lastBlock.top - this.snakeBlockHeight : lastBlock.top + this.snakeBlockHeight
              this.snakeBody[i].direction = turnPoint.direction
              this.snakeBody[i].turn_idx = lastBlock.turn_idx + 1
            }
            break
          case 'up':
            left = lastBlock.left
            top = lastBlock.top + this.snakeBlockHeight
            if (turnPoint && turnPoint.top < top) {
              top = lastBlock.top
              left = turnPoint.direction === 'right' ? lastBlock.left - this.snakeBlockWidth : lastBlock.left + this.snakeBlockWidth
              this.snakeBody[i].direction = turnPoint.direction
              this.snakeBody[i].turn_idx = lastBlock.turn_idx + 1
            }
            break
          case 'down':
            left = lastBlock.left
            top = lastBlock.top - this.snakeBlockHeight
            if (turnPoint && turnPoint.top > top) {
              top = lastBlock.top
              left = turnPoint.direction === 'right' ? lastBlock.left - this.snakeBlockWidth : lastBlock.left + this.snakeBlockWidth
              this.snakeBody[i].direction = turnPoint.direction
              this.snakeBody[i].turn_idx = lastBlock.turn_idx + 1
            }
            break
        }
        this.snakeBody[i].left = left
        this.snakeBody[i].top = top
        lastBlock = this.snakeBody[i]
        this.snake_html += `<div class="snake-block"
          style="background-color: ${this.snakeBody[i].color};
          width: ${this.snakeBlockWidth}px;
          height: ${this.snakeBlockHeight}px;
          left: ${left}px;
          top: ${top}px;
          position: absolute;
          display: inline-block;
          border: solid 1px #ccc"></div>`
      }
      this.appendFood()
    },
    moveStep () {
      switch (this.snake_head_p.direction) {
        case 'right':
          this.snake_head_p.left += this.step
          break
        case 'left':
          this.snake_head_p.left -= this.step
          break
        case 'up':
          this.snake_head_p.top -= this.step
          break
        case 'down':
          this.snake_head_p.top += this.step
          break
      }
    },
    moveSnake () {
      this.moveStep()
      this.drawSnake()
      this.checkIsDead()
      this.eatFood()
    },
    eatFood () {
      if (this.snake_head_p.top === this.food_p.top &&
        this.snake_head_p.left === this.food_p.left
      ) {
        this.snake_head_p.top = this.food_p.top
        this.snake_head_p.left = this.food_p.left
        this.snakeBody.unshift({color: this.food_p.color})
        this.createFood()
        this.score += 20
      }
    },
    checkIsDead () {
      let mv = $('.message-view').eq(0)
      for (let i = 2; i < this.snakeBody.length; i++) {
        if ((this.snake_head_p.top === this.snakeBody[i].top &&
          this.snake_head_p.left === this.snakeBody[i].left) ||
          this.snake_head_p.left > mv.width() + 22 ||
          this.snake_head_p.left < 0 ||
          this.snake_head_p.top > 10 + mv.height() ||
          this.snake_head_p.top < 0
        ) {
          this.stop()
          this.is_dead = true
          this.$message.error('游戏结束')
          break
        }
      }
    },
    createFood () {
      let mv = $('.message-view').eq(0)
      this.food_p.left = Math.floor(Math.random() * mv.width() / 10) * 10
      this.food_p.top = Math.floor(Math.random() * mv.height() / 10) * 10
      this.food_p.color = this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
    },
    appendFood () {
      this.snake_html += `<div class="snake-block"
          style="background-color: ${this.food_p.color};
          width: ${this.snakeBlockWidth}px;
          height: ${this.snakeBlockHeight}px;
          top: ${this.food_p.top}px;
          left: ${this.food_p.left}px;
          position: absolute;
          display: inline-block;
          border: solid 1px #ccc"></div>`
    },
    start () {
      if (this.is_dead) {
        return
      }
      if (this.is_start) {
        return
      }
      this.moveSnake()
      this.interval = window.setInterval(this.moveSnake, this.time_interval)
      this.is_start = true
    },
    stop () {
      window.clearInterval(this.interval)
      this.is_start = false
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
    /*background-image: url("../assets/loginbg.jpeg");*/
    /*background-repeat:no-repeat ;*/
    /*background-size:100% 100%;*/
    /*color: #e6e6e6;*/
    padding: 10px;
  }
</style>
