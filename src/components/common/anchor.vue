<template>
  <div class="banner">
    <div class="title">国华人寿承保</div>
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
  margin: 26px;
  height: 320px;
  background-image: url("../../assets/anchor.png");
  // background-image: url('../../images/login/login_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  //   img {
  //     height: 320px;
  //     width: 100%;
  //   }
  .title {
    font-size: 24px;
    color: #ffb720;
    padding: 22px 29px 0 29px;
  }
}
</style>
