<template>
  <div>
    <nav :class="{ show: isShowRNB }">
      <div class="inventory-title">
        <a href="javascript:void(0)">최근 본 상품</a>
        <p class="like_link">
          <a href="javascript:void(0)">찜 목록 보기</a>
        </p>
        <div class="flex-space"></div>
        <div
          class="close-nav"
          @click="offNav('RNB')"></div>
      </div>
    </nav>
    <!--Background-->
    <div
      v-show="isShowRNB"
      v-cloak
      class="nav-bg"
      @click="offNav('RNB')"></div>
  </div>
</template>

<script>
export default {
  computed: {
    isShowRNB () {
      return this.$store.state.navigation.isShowRNB
    }
  },
  methods: {
    offNav (name) {
      this.$store.dispatch('navigation/offNav', name)
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
  transition: transform .4s;
  transform: translateX(400px);
  &.show {
    transform: translateX(0);
  }
  .inventory-title {
    height: 70px;
    padding: 0 25px;
    border-bottom: 1px solid #f4f4f4;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: relative;
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      .like_link {
        display: inline-block;
        margin: 0 0 0 25px;
        vertical-align: middle;
        a {
          position: relative;
          display: inline-block;
          padding: 0 12px 0 0;
          font-size: 14px;
          color: #111;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .flex-space {
      flex: 1;
    }
    .close-nav {
      width: 36px;
      height: 36px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -261px -203px;
      background-size: 363px;
      cursor: pointer;
    }
  }
  .inventory-title > a {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
.nav-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, .2);
  z-index: 98;
}
//.nav-bg {
//  position: fixed;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background-color: rgba(#000, .2);
//  z-index: 98;
//}
</style>