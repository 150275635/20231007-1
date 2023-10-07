<template>
    <div class="swiper-container kerwin">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
      </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // console.log("mounted")
    new Swiper('.kerwin', {
      // direction:"vertical", //垂直
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>
