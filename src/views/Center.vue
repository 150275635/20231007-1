<template>
  <div>center</div>
</template>
<script>
export default {
  // 路由的生命周期
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不!能!获取组件实例`this`
    // 因为当守卫执行前,组件实例还没被创建
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
}
</script>
