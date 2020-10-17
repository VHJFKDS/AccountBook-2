import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/NotFound.vue'

import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
   path:'/',
   redirect:'/money' //重定向到money
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'*',  //匹配其他所有
    component:NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
