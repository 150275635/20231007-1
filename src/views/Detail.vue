<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
  created () {
    // 当前匹配的路由  this.$route
    console.log('created', this.$route.params.myid)
    // axios 利用id发请求到详情接口,获取详细数据,布局页面
  }
}
</script>
