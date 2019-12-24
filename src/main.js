import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/assets/style/normalize.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(ViewUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next('/home')
  }
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
