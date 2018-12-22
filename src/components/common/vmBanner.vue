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
  height: 320px;
  background-image: url("../../assets/banner.png");
  // background-image: url('../../images/login/login_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  //   img {
  //     height: 320px;
  //     width: 100%;
  //   }
  .title {
    font-size: 24px;
    color: #ffb720;
    padding: 22px 29px 0 29px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 183, 32, 1);

  }
}
</style>
