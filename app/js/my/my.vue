<template lang="html">
    <div :class="$style.home">
        <Heador></Heador>
        <Navbar></Navbar>
        <Hfooter></Hfooter>
    </div>
</template>

<script>
import Heador from "./../public/header";
import Navbar from "./../public/navbar";
import Hfooter from "./../public/hfooter";
export default {
  components: {
    Heador,
    Navbar,
    Hfooter
  }
};
</script>

<style lang="scss" module>
.home {
  font-size: 80px;
}
</style>
