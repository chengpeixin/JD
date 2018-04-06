<template>
  <Panel :title="titleName" :class="$style.panel">
    <!-- 插槽 -->
    <section :class="$style.content" class="clearfloat">
      <router-link to="home" v-for="item in list" :key="item.title" :class="$style.item">
        <p :class="$style.item_title">{{item.title}}
          <span :class="$style.item_title2">{{item.title2}}</span>
        </p>
        <p :class="$style.item_percentage">{{item.Percentage}}</p>
        <p :class="$style.item_cover">{{item.cover}}</p>
      </router-link>
    </section>
  </Panel>
</template>

<script>
import Panel from "./../core/panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      list: [
        {
          title: "定期理财",
          title2: "90天可质押",
          Percentage: "5.50%",
          cover: "历史年化结算利率"
        },
        {
          title: "固收理财",
          title2: "理财推荐",
          Percentage: "5.80%",
          cover: "综合年化收益率"
        },
        {
          title: "基智账户",
          title2: "组合投资",
          Percentage: "8%-10%",
          cover: "止盈年化收益率"
        },
        {
          title: "小白基金",
          title2: "超短期",
          Percentage: "5.00%",
          cover: "7日年化收益率"
        }
      ],
      titleName: "精选推荐"
    };
  }
};
</script>

<style lang="scss" module scoped>
.panel {
  overflow: hidden;
  background: #fff;
}
.item {
  width: 50%;
  height: 218px;
  float: left;
  text-decoration: none;
  padding-left: 32px;
  padding-top: 32px;
  box-sizing: border-box;
  background: #fff;
}
.item:nth-child(1) {
  border-bottom: 1px solid #eee;
  position: relative;
}
.item:nth-child(1) ::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: 55px;
  width: 1px;
  height: 110px;
  background: #eee;
}
.item:nth-child(2) {
  border-bottom: 1px solid #eee;
}
.item:nth-child(3) {
  position: relative;
}
.item:nth-child(3) ::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: 55px;
  width: 1px;
  height: 110px;
  background: #eee;
}
.item_title {
  color: #333;
  font-weight: 700;
  font-size: 30px;
  display: block;
  height: 42px;
  line-height: 42px;
}
.item_title2 {
  height: 34px;
  line-height: 34px;
  font-size: 22px;
  padding: 0 8px;
  color: #ff5155;
  text-align: center;
}
.item_percentage {
  font-weight: 700;
  font-size: 44px;
  height: 58px;
  line-height: 58px;
  color: #ff5155;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_cover {
  font-size: 24px;
  height: 34px;
  line-height: 34px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>