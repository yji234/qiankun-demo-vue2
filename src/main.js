// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'

Vue.config.productionTip = false

console.log('routes', routes.options.routes)

let router = null
let instance = null
function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2-demo/' : '/',
    mode: 'history',
    routes: routes.options.routes
  })

  const containerEle = container ? container.querySelector('#app') : '#app'
  instance = new Vue({
    el: containerEle,
    router,
    components: { App },
    template: '<App/>'
  })
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
