<template>
  <div class="fixed-btn">
    <span>保费试算</span>
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
.fixed-btn {
  position: fixed;
  height: 140px;
  width: 140px;
  bottom: 130px;
  right: 0;
  background-image: url("../../assets/fixedbtn.png");
  // background-image: url('../../images/login/login_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #ffffff;
    font-size: 34px;
    width: 34px;
    font-family: "阿里汉仪智能黑体"
  }
}
</style>
