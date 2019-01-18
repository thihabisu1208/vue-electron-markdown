import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'markdown-page',
      component: require('@/components/MarkdownPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
