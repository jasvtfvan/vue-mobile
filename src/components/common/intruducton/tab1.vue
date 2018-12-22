<template>
  <div class="tab1">
    <div class="bg-img"></div>
    <div class="bg-text">
      <p class="title">案例演示</p>
      <ul>
        <li>1.大大28岁时，儿子小小出生；</li>
        <li>2.小小18-21岁期间，每年可领取5万元作为教育金，共领取20万</li>
        <li>3.大大65-80岁期间，每年可领取10万元作为养老金补充，共领取160万；</li>
        <li>4.大大80岁时可一次性领取79.43万；</li>
      </ul>
      <!-- <br>
      <div class="sub-titile">数据为保单年度末的累计生息账户余额和现金价值之和</div>-->
    </div>
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
.tab1 {
  .bg-img {
    margin-top: 50px;
    clear: both;
    height: 1000px;
    background-image: url("../../../assets/content1.png");
    // background-image: url('../../images/login/login_bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-size:cover;
  }

  .bg-text {
    .title {
      color: #444444;
      font-size: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul li {
      color: #666666;
      font-size: 26px;
    }
  }
}
</style>
