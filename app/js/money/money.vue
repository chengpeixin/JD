<template lang="html">
    <div :class="$style.home">
        <Heador></Heador>
        <Hslider></Hslider>
        <Life></Life>
        <Navbar></Navbar>
        <Novice></Novice>
        <Banner></Banner>
        <Hfooter></Hfooter>
    </div>
</template>

<script>
import Heador from "./../public/header";
import Navbar from "./../public/navbar";
import Hslider from "./hslider";
import Life from "./life";
import Novice from "./novice";
import Banner from "./banner";
import Hfooter from "./../public/hfooter";
export default {
  components: {
    Heador,
    Navbar,
    Hslider,
    Life,
    Novice,
    Banner,
    Hfooter
  }
};
</script>

<style lang="scss" module>
.home {
  font-size: 80px;
}
</style>
