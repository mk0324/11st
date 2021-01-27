<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
  </div>
</template>

<script>
import LNB from "./components/LNB";
import MyHeader from "./components/MyHeader";
import Billboard from "./components/Billboard";
import Direct from "./components/Direct";
export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
    Direct,
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>