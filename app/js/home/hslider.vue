<template>
  <div>
    <article>
      <Slider :items="items" :cname="$style.slider"></Slider>
      <section :class="$style.list">
        <div :class="$style.item" v-for="item in enters" :key="items.img">
          <router-link :to="item.href">
            <img :src="item.img" :alt="item.title">
            <h4>{{item.title}}</h4>
          </router-link>
        </div>
      </section>
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
      ],
      enters: [
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
          title: "优惠券"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
          title: "领红包"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
          title: "抢钢镚"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
          title: "白条提额"
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