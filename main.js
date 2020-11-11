import Vue from 'vue'
import App from './App'
// 引入uView
import uView from "uview-ui";
Vue.use(uView);

//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

// 引入echart
import echarts from 'echarts'
//把vuex定义成全局组件
Vue.prototype.$echarts = echarts
Vue.use(echarts);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
//挂载
    store
})
app.$mount()