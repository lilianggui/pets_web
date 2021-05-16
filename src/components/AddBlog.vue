<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="">
        <quill-editor
          v-model="form.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" v-on:click="saveHtml">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'AddBlog',
  data () {
    return {
      form: {
        content: '',
        title: ''
      },
      editorOption: {}
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorBlur () {
    },
    onEditorFocus () { // 获得焦点事件
    },
    onEditorChange () { // 内容改变事件
    },
    saveHtml (event) { // 点击保存按钮保存
      let url = 'http://127.0.0.1:8080/saveBlog'
      let data = this.form
      axios.post(url, data).then(res => {
        this.$router.push({name: 'BlogList'})
      })
    }
  }
}
</script>

<style>
  .edit_container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .ql-editor{
    height: 350px;
  }
</style>
