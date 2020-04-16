import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Websocket from '@/components/Websocket'
import ChatRoom from '@/components/ChatRoom'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/websocket',
      name: 'Websocket',
      component: Websocket
    },
    {
      path: '/chatRoom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
