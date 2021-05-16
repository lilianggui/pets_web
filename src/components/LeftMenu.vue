<template>
    <el-row>
      <el-col :span="24">
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" style="text-align: left; height: 800px">

          <el-submenu :index="item.id" v-for="item in menu" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-text="item.name"></span>
            </template>

            <el-menu-item-group v-for="sub in item.sub" :key="sub.componentName">
              <el-menu-item :index="sub.componentName">{{sub.name}}</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      menu: [
        {
          name: '在线工具',
          id: '1',
          icon: 'el-icon-location',
          sub: [
            {
              name: 'unicode&中文互换',
              componentName: 'UnicodeChinese'
            },
            {
              name: 'json格式化',
              componentName: 'JSONFormat'
            },
            {
              name: '日期格式化',
              componentName: 'DateFormat'
            },
            {
              name: '文件格式转换',
              componentName: 'File'
            },
            {
              name: '五颜六色',
              componentName: 'Color'
            }
          ]
        },
        {
          name: '技术',
          id: '2',
          icon: 'el-icon-document',
          sub: [
            {
              name: '智能识别', // 图像、人脸、语音、手写体
              componentName: 'Picture'
            },
            {
              name: 'redis客户端',
              componentName: 'Redis'
            }
          ]
        },
        {
          name: '温故知新',
          id: '3',
          icon: 'el-icon-notebook-1',
          sub: [
            {
              name: 'Java',
              componentName: 'BlogList'
            },
            {
              name: 'JavaScript',
              componentName: 'JavaScript'
            },
            {
              name: 'Vue',
              componentName: 'Vue'
            }
          ]
        },
        {
          name: '网页小游戏',
          id: '4',
          icon: 'el-icon-bank-card',
          sub: [
            {
              name: '俄罗斯方块',
              componentName: 'els'
            },
            {
              name: '贪吃蛇',
              componentName: 'Snake'
            },
            {
              name: '打飞机',
              componentName: 'pla'
            }
          ]
        },
        {
          name: '实战',
          id: '5',
          icon: 'el-icon-wallet',
          sub: [
            {
              name: '聊天室',
              componentName: 'ChatRoom'
            },
            {
              name: '音乐播放器',
              componentName: 'mu'
            },
            {
              name: '美团外卖',
              componentName: 'mt'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .el-menu{
    border-right-width: 0
  }
</style>
