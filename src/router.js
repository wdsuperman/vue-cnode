import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Section from '@/components/Section'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:username',
      component: User
    },
    {
      path: '/',
      component: Section
    },
    {
      path: '/topic/:id',
      component: Topic
    }
  ],
  mode: 'history'
})