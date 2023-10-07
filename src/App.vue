<template>
  <div>
    <div class="box">111111111</div>
    <ul>
      <!-- vue-router(3之前,包括3) -1- 声明式导航 -->
      <!-- <router-link to="/films" active-class="wrpactive" tag="li">电影</router-link>
        <router-link to="/cinemas" active-class="wrpactive" tag="li">影院</router-link>
        <router-link to="/center" active-class="wrpactive" tag="li">我的</router-link>  -->

      <!-- vue-router(4) -2- 声明式导航 -->
      <router-link v-for="data in datalist" :key="data.to" :to="data.to" custom v-slot="{ navigate,isActive}">
        <li @click="navigate" :class="isActive?'wrpactive':''">{{data.label}}</li>
      </router-link>
      <!-- <router-link to="/films" custom v-slot="{ navigate,isActive}">
        <li @click="navigate" :class="isActive?'wrpactive':''">电影</li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate,isActive}">
        <li @click="navigate" :class="isActive?'wrpactive':''">影院</li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate,isActive}">
        <li @click="navigate" :class="isActive?'wrpactive':''">我的</li>
      </router-link> -->
    </ul>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  data () {
    return {
      datalist: [
        {
          to: '/films',
          label: '电影'
        },
        {
          to: '/cinemas',
          label: '影院'
        },
        {
          to: '/center',
          label: '我的'
        }
      ]
    }
  }

}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
// lang="scss" 可支持scss
.wrpactive {
  color: red;
}
body{
  font-size: 16px;
}
.box{
  width: 46.874rem;
  height: 12.5rem;
  background: yellow;
}
</style>
