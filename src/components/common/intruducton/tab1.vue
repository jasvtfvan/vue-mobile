<template>
  <div class="tab1">
    <div class="bg-img">
      <img src="../../../assets/content1.png" alt>
    </div>
    <div class="bg-text">
      <p class="title">
        <span></span>
        <span>案例演示</span>
        <span></span>
      </p>
      <ul>
        <li>1.大大28岁时，儿子小小出生；</li>
        <li>2.小小18-21岁期间，每年可领取5万元作为教育金，共领取20万</li>
        <li>3.大大65-80岁期间，每年可领取10万元作为养老金补充，共领取160万；</li>
        <li>4.大大80岁时可一次性领取79.43万；</li>
        <li>
          <img src="../../../assets/tab1/chart.png" alt>
        </li>
        <li>
          <img src="../../../assets/tab1/point.svg" alt>
          数据为保单年度末的累计生存金与累计生息账户余额之和
        </li>
        <li>
          注：您在投保时可选择“累积生息”，也可选择“到期领取”。该案例演示为生存金按3.5%利率“累积生息”的结果。
        </li>
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

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .bg-text {
    margin: 0 17px 0 50px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      span:nth-of-type(2) {
        padding: 47px;
        font-size: 44px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(68, 68, 68, 1);
        line-height: 62px;
      }
    }

    ul li {
      font-size: 26px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 48px;
      &:nth-of-type(5) {
        img {
          width: 572px;
          height: 399px;
          margin: 40px;
        }
      }

      &:nth-of-type(6) {
        font-size: 22px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);

        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 25px;
          height: 25px;
        }
      }
      &:nth-of-type(7) {
        font-size: 22px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
      }
    }
  }
}
</style>
