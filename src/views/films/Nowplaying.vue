<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: ['111', '222', '333']
    }
  },
  methods: {
    handleChangePage (id) {
      // 编程式导航
      // location.href = '#/detail'   // 如果路径没有井号 就会报错
      // 1 通过路径跳转
    //   this.$router.push(`/detail/${id}`);
      // 2 通过命名路由跳转
      this.$router.push({
        name: 'wrpDetail',
        params: {
          myid: id
        }
      })
    }
  }
}
</script>
