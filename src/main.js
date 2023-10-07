import Vue from 'vue' // ES6 导入方式
import App from './App.vue' // 导入根组件App
import router from './router' // 导入vue路由
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // this.$router === router
  // store,
  render: h => h(App) // vue支持的新写法 相当于把根组件App渲染实例化后 挂到(div)app节点上
}).$mount('#app')

// const obj = {
//   name: 'wrp',
//   age: 29
// }
// console.log(obj)
