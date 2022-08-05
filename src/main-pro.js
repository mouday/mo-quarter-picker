import Vue from 'vue'
import App from './App.vue'

// console.log('main-test');

// import ElementUI from 'element-ui'
import MoQuarterPicker from 'mo-quarter-picker'
// import 'element-ui/lib/theme-chalk/index.css'
// import Components from './components/index.js'

// Vue.use(ElementUI, {size: 'mini'})
// Vue.use(Components)
Vue.use(MoQuarterPicker)

ELEMENT.size = 'mini'

new Vue({
  el: '#app',
  render: h => h(App)
})
