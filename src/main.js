// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'// 解决移动端点击时间有300ms延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播图组件
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'// 解决移动端适配
import 'styles/border.css'// 解决移动端1像素边框
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'// 轮播图样式

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
