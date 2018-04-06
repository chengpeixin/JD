<template>
  <div>
    <Panel title="新品推荐" class="panel">
      <section :class="$style.content">
        <router-link to="home" :class="$style.jianhuo">更多尖货></router-link>
        <Slider :options="options" :items="items" cname="product-slider"></Slider>
      </section>
    </Panel>
  </div>
</template>

<script>
import Panel from "./../core/panel";
import Slider from "./../core/slider";
export default {
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421"
        }
      ],
      options: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        freeMode: true
      }
    };
  },
  components: {
    Panel,
    Slider
  }
};
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    padding-left: 20px;
    .swiper-slide {
      width: 300px;
      a {
        display: block;
        // width: 100%;
        img {
          // width: 100%;
          display: block;
          border: 1px solid #eee;
        }
      }
    }
  }
}
</style>


<style lang="scss" module scoped>
@import "../../css/element.scss";
.panel {
  // @include panel;
}
.product-slider {
}
.content {
  padding-bottom: 40px;
  position: relative;
  .jianhuo {
    position: absolute;
    font-size: 24px;
    color: #999;
    top: -70px;
    right: 48px;
    text-decoration: none;
  }
}
</style>