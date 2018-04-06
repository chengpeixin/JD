<template>
  <div>
    <Panel :class="$style.Panel">
      <img :src="imgSrc" width="100%">
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
      imgSrc:
        "https://img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
    };
  }
};
</script>

<style lang="scss" module scoped>
.Panel {
  width: 100%;
  overflow: hidden;
}
</style>