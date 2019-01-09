<template>
  <div class="banner">
    <img src="../../assets/anchor.png" alt>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.banner {

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 25px;
  }

}
</style>
