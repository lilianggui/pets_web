<template>
  <div id="main">
    <el-container>
      <el-header class="header">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-aside style="width: 200px; height: 800px">
          <keep-alive>
            <v-left-menu></v-left-menu>
          </keep-alive>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view v-if="$route.meta.keepalive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepalive"></router-view>
          </el-main>
          <el-footer>
            底部
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
import LeftMenu from './LeftMenu'
export default {
  name: 'Main',
  components: {
    'v-header': Header,
    'v-left-menu': LeftMenu
  }
}
</script>

<style scoped>
  .header {
    height: 3.6rem;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    padding: .7rem 1.5rem;
    line-height: 2.2rem
  }
</style>
