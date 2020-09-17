import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Drinks from '@/components/Drinks'
import Unknown from '@/components/Unknown'
import Flavour from '@/components/Flavour'
import About from '@/components/About'
import Environment from '@/components/Environment'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/environment',
      name: 'Environment',
      component: Environment
    },
    {
      path: '/:pathMatch(.*)',
      component: Unknown
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
