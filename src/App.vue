<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
    <hot-focus></hot-focus>
    <global-banner></global-banner>
  </div>
</template>

<script>
import LNB from "./components/LNB";
import MyHeader from "./components/MyHeader";
import Billboard from "./components/Billboard";
import Direct from "./components/Direct";
import HotFocus from "./components/HotFocus";
import GlobalBanner from "./components/GlobalBanner";
export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
    Direct,
    HotFocus,
    GlobalBanner
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>