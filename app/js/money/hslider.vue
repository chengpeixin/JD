<template>
  <div>
    <article>
      <Slider :items="items" :cname="$style.slider"></Slider>
    </article>
  </div>
</template>

<script>
import Slider from "../core/slider";
export default {
  name: "hslider",
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t15592/207/2471185548/49242/b5b977e1/5aab9cbeN9432b004.jpg?width=750&height=320"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15052/165/2599872005/22742/912dd494/5aab9cf6N11ebb5fe.jpg?width=750&height=320"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16105/317/2435403324/47404/b20add2b/5aab9d26N099f9f0d.jpg?width=750&height=320"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t19468/230/835752659/25354/5fc7a83d/5aab9d4cN828e6f14.jpg?width=750&height=320"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "./../../css/element.scss";
.slider {
  margin-top: 100px;
}
.list {
  @include list(row);
  background-attachment: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  background: #fff;

  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 45*2px;
      height: 45*2px;
      margin: 0 auto;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>