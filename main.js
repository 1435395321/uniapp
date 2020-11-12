import Vue from 'vue'
import App from './App'
// 引入uView
import uView from "uview-ui";
Vue.use(uView);
//引入vuex
import store from './store'

// 公用js 
import common from 'commoen/index.js'
//把vuex定义成全局组件
Vue.prototype.$store = store

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()