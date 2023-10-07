<template>
  <div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.imgUrl" >
      </film-swiper-item>

    </film-swiper>
    <div>
      二级页面
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      console.log(res.data)
      this.datalist = res.data.banner
    })
  },
  components: {
    filmSwiper,
    filmSwiperItem
  }
}
</script>
<style lang="scss" scoped>
   .filmswiperitem{
    img{
      width: 100%;
    }
   }
</style>
