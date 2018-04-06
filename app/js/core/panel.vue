<template>
  <div>
    <section :class="[panelClass,cname]">
      <h4 v-if="title">-{{title}}-</h4>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      panelClass: "panel"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/element.scss";
.panel {
  @include panel;
}
</style>