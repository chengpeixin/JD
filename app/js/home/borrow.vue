<template>
  <div>
    <Pancel title="买车白条" :class="$style.panel">
      <router-link to="home" :class="$style.content">
        <img :src="imgSrc" alt="买车白条">
      </router-link>
    </Pancel>
  </div>
</template>

<script>
import Pancel from "./../core/panel";
export default {
  data() {
    return {
      imgSrc:
        "//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200"
    };
  },
  components: {
    Pancel
  }
};
</script>

<style lang="scss" module scoped>
@import "../../css/element.scss";
.panel {
  @include panel;
}
.content {
  img {
    display: block;
    width: 100%;
    padding-bottom: 30px;
  }
}
</style>