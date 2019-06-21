import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [{
      name: 'home',
      // 代替路线
      path: '/',
      // @表示src目录。无论当前模块在哪里，可以直接定位
      component: () => import('@/views/home')
    }, 
    {
      name: 'login',
      path: '@/login',
      component: () => import('@/views/login')
    }

  ]
})
