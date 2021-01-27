<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
  </div>
</template>

<script>
import LNB from "./components/LNB";
import MyHeader from "./components/MyHeader";
import Billboard from "./components/Billboard";
export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>