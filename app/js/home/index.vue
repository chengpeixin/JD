<template lang="html">
    <div :class="$style.home">
        <Heador></Heador>
        <Hslider></Hslider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Product></Product>
        <Life></Life>
        <Navbar></Navbar>
        <Hfooter></Hfooter>
    </div>
</template>

<script>
import Heador from "./../public/header";
import Hslider from "./hslider";
import Novice from "./novice";
import Borrow from "./borrow";
import Product from "./product";
import Life from "./life";
import Navbar from "./../public/navbar";
import Hfooter from "./../public/hfooter";
export default {
  components: {
    Heador,
    Hslider,
    Novice,
    Borrow,
    Product,
    Life,
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
