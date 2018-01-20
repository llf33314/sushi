import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import dingdan from '@/components/dingdan/dingdanindex/dingdanindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    }
  ]
})
