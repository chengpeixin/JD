<template>
  <div>
    <div class="header">
      <div @click="back()">
        ＜</div>
      <div class="moddle">京东登录</div>
      <div class=""></div>
      <!-- 保留元素 -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: () => {
      history.back();
    }
  }
};
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  height: 86px;
  display: flex;
  border-bottom: 1px solid #bbb;
  background: #f9f9f9;
  box-sizing: border-box;
  justify-content: space-between;
  div {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    color: #616161;
    font-size: 26px;
  }
  div[class="moddle"] {
    width: 30%;
  }
}
</style>