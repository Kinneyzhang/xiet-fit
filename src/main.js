import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/fonts.css'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueTypedJs)

new Vue({
  render: h => h(App),
}).$mount('#app')
