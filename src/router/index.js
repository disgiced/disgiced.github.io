import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Drinks from '@/components/Drinks'
import Unknown from '@/components/Unknown'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/drinks',
      name: 'Drinks',
      component: Drinks
    },
    {
      path: '/:pathMatch(.*)',
      component: Unknown
    }
  ]
})
