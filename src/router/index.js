import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import Hello from '../components/Hello'
import zd from '../components/pages/zd'
import Opt from '../components/pages/opt'
import Sendmsg from '../components/pages/sendmsg'
import System from '../components/pages/system'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {path: '/zd', component: zd, name: 'zd'},
        {path: '/Opt', component: Opt, name: 'Opt'}
      ]
    },
    {
      path: '/',
      name: '',
      component: Hello,
      children: [
        {path: '/Sendmsg', component: Sendmsg, name: 'Sendmsg'},
        {path: '/System', component: System, name: 'System'}
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
