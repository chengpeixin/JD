<template>
  <div>
    <Panel :class="$style.Panel">
      <img :src="imgSrc">
    </Panel>
  </div>
</template>

<script>
import Panel from "./../core/panel.vue";
export default {
  components: { Panel },
  data() {
    return {
      imgSrc:
        "https://img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270"
    };
  }
};
</script>

<style lang="scss" module scoped>
.Panel {
  margin: 20px 0;
}
</style>