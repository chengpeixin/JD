<template>
  <div>
    <Panel :class="$style.panel">
      <ul :class="$style.content">
        <li v-for="item in items" :key="item.href" :class="$style.li">
          <router-link :to="item.href">
            <img :src="item.src" :class="$style.img">
            <p :class="$style.p">{{item.name}}</p>
          </router-link>
        </li>
      </ul>
    </Panel>
  </div>
</template>

<script>
import Panel from "./../core/panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66",
          name: "首页"
        },
        {
          href: "money",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66",
          name: "理财"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66",
          name: "白条"
        },
        {
          href: "my",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66",
          name: "我的"
        }
      ]
    };
  },
  created() {
    // this.islogin();
  },
  methods: {
    islogin() {
      if (this.$cookies.isKey("user")) console.log("已经登录");
      else alert("未登录");
    }
  }
};
</script>

<style lang="scss" module scoped>
@import "../../css/element.scss";
.panel {
  @include panel;
  position: fixed;
  bottom: 0px;
  margin: 0;
  width: 100%;
  z-index: 1;
  .content {
    @include flex(row);
    .li {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        font-size: 24px;
        .img {
          width: 50px;
        }
        .p {
          text-decoration: none;
          color: #666;
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }
}
</style>