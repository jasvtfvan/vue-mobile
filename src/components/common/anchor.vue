<template>
  <div class="banner">
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
  // width: 100%;
  background-image: url("../../assets/anchor.png");
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
  }
}
</style>
