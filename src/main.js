import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/assets/style/normalize.css'

Vue.use( ViewUI );
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
