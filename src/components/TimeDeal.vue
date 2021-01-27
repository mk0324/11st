<template>
  <section
    ref="lazyLoadElement"
    class="time-deal">
    <div class="inner">
      <h2>타임딜</h2>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$lazyLoad(this.$refs.lazyLoadElement)
  }
}
</script>

<style scoped lang="scss">
section {
  .inner {
    height: 612px;
  }
}
</style>