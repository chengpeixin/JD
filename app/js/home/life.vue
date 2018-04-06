<template>
  <div>
    <Panel class="youche" title="有车有钱">
      <div class="foo">
        <div class="title_img clearfloat" v-for="item in items">
          <router-link :to="item.href">
            <img :src="item.src" width="100%">
          </router-link>
        </div>
      </div>

      <div class="foo2 clearfloat">
        <div v-for="item in list" :key="item.href">
          <router-link :to="item.href">
            <img :src="item.src">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from "./../core/panel";
export default {
  data() {
    return {
      list: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
          name: "旅游"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
          name: "医美"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
          name: "房抵贷"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
          name: "驾校"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
          name: "分期用"
        }
      ],
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t17800/224/698056253/28974/d3ad0665/5aa0ec80N348451f8.png?width=375&height=233"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233"
        }
      ]
    };
  },
  components: {
    Panel
  }
};
</script>

<style lang="scss" scoped>
.youche {
  // margin-bottom: 160px;
  overflow: hidden;
  padding-bottom: 20px;
  background: #fff;
}
.foo {
  display: flex;
  justify-content: center;
  align-items: center;
  .title_img {
    width: 300px;
    height: 200px;
    overflow: hidden;
    float: left;
  }
}
.foo2 {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 24px;
    justify-content: center;
    text-align: center;
    flex: 1;
    a {
      text-decoration: none;
      margin-top: 0px;
      img {
        width: 90px;
        height: 90px;
      }
      p {
        margin-top: 10px;
        text-align: center;
        color: #666;
      }
    }
  }
}
</style>