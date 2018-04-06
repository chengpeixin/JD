<template>
  <div style="margin-bottom: 150px;margin-top: 30px;overflow:hidden;">
    <ul :class="$style.hasFloorBottom">
      <li v-for="item in items" :key="item.name">
        <img :src="item.src">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <div :class="$style.info_fo">
      <p :class="$style.info" v-for="item in infos">
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
          name: "客户端"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
          name: "触屏版"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
          name: "电脑版"
        }
      ],
      infos: [
        "Copyright © 2004-2018 京东JD.com 版权所有",
        "投资有风险，购买需谨慎",
        "京东金融平台服务协议",
        "京东金融隐私政策"
      ]
    };
  }
};
</script>

<style lang="scss" module scoped>
.hasFloorBottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    width: 33.333%;
    font-size: 22px;
    color: #999999;
    text-align: center;
  }
  img {
    width: 35%;
  }
  p {
    margin-top: 10px;
  }
}
.info_fo {
  margin-top: 30px;
  margin-bottom: 20px;
  .info {
    color: #999;
    padding: 23px 0;
    font-size: 22px;
    text-align: center;
    background: #f5f5f5;
    border-top: 1px solid #ddd;
  }
}
</style>