import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UnicodeChinese from '@/components/UnicodeChinese'
import HistogramTest from '@/components/HistogramTest'
import JSONFormat from '@/components/JSONFormat'
import BlogList from '@/components/BlogList'
import AddBlog from '@/components/AddBlog'
import BlogDetail from '@/components/BlogDetail'
import DateFormat from '@/components/DateFormat'
import HomePage from '@/components/HomePage'
import ChatRoom from '@/components/ChatRoom'
import Color from '@/components/Color'
import Snake from '@/components/Snake'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepalive: false,
        noAuth: true
      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/HomePage',
          name: 'HomePage',
          component: HomePage,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/Snake',
          name: 'Snake',
          component: Snake,
          meta: {
            keepalive: false
          }
        },
        {
          path: '/Color',
          name: 'Color',
          component: Color,
          meta: {
            keepalive: false
          }
        },
        {
          path: '/ChatRoom',
          name: 'ChatRoom',
          component: ChatRoom,
          meta: {
            keepalive: false
          }
        },
        {
          path: '/UnicodeChinese',
          name: 'UnicodeChinese',
          component: UnicodeChinese,
          meta: {
            keepalive: true,
            noAuth: true
          }
        },
        {
          path: '/JSONFormat',
          name: 'JSONFormat',
          component: JSONFormat,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/BlogList',
          name: 'BlogList',
          component: BlogList,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/AddBlog',
          name: 'AddBlog',
          component: AddBlog,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/BlogDetail',
          name: 'BlogDetail',
          component: BlogDetail,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/HistogramTest',
          name: 'HistogramTest',
          component: HistogramTest,
          meta: {
            keepalive: true
          }
        },
        {
          path: '/DateFormat',
          name: 'DateFormat',
          component: DateFormat,
          meta: {
            keepalive: true
          }
        }
      ],
      meta: {
        keepalive: true
      }
    }
  ]
})
