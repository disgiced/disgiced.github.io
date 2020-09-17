import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Drinks from '@/components/Drinks'
import Unknown from '@/components/Unknown'
import Flavour from '@/components/Flavour'

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
      path: '/drinks/:flavour',
      name: 'Flavour',
      component: Flavour,
      props: true
    },
    {
      path: '/:pathMatch(.*)',
      component: Unknown
    }
  ]
})
