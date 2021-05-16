<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">这什么系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let url = 'http://127.0.0.1:8080/login'
      axios.post(url, this.form).then(res => {
        if (res.data.code === '0') {
          // sessionStorage.setItem('userName', res.data.data.userName)
          localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          this.$router.push({
            path: '/HomePage'
          })
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>

<style>
  .login-form {
    width: 350px;
    margin: 160px auto; /* 上下间距160px，左右自动居中*/
    background-color: rgba(112,155,168, 0.6); /* 透明背景色 709BA8 */
    padding: 30px;
    border-radius: 20px; /* 圆角 */
  }

  /* 背景 */
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../assets/loginbg.jpeg");
    background-repeat:no-repeat ;
    background-size:100% 100%;
    background-attachment: fixed;
  }

  /* 标题 */
  .login-title {
    color: #303133;
    text-align: center;
  }
  .login-form .el-form-item__label{
    color: #303133;
  }
</style>
