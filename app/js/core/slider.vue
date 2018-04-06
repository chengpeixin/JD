<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.src" class="swiper_img">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [{ href: "", src: "" }]; //href：跳转链接　src：图片链接
      }
    },
    cname: {
      type: String,
      default: ""
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "~swiper/dist/css/swiper.css";
.swiper_img {
  width: 100%;
  display: block;
}
</style>
