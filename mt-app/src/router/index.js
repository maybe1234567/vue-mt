import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import index from '@/page/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: 'changeCity',
      name: 'changeCity',
      component: () => import('@/page/changeCity')
    }, {
      path: 'goods/:name',
      name: 'goods',
      component: () => import('@/page/goodsList')
    }]
  },
  {
    path: '/blank',
    name: 'blankpage',
    component: () => import('@/layout/blank'),
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/page/login')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/page/register')
    }
    ]
  }
  ]
})
