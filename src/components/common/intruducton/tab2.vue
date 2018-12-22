<template>
  <div class="tab2">
    <ul>
      <li>购买须知</li>
      <li>保障年龄：30天-50周岁</li>
      <li>保障期限：终身</li>
      <li>交费方式：月/年交</li>
      <li>交费年限：可选择10年、15年或20年交</li>
      <li>查看《更多投保须知》《保险条款》</li>
      <li>保险公司介绍</li>
      <li>国华人寿保险股份有限公司成立于2007年11月，总部位于上海市地标建筑上海中心大厦,注册地湖北武汉。是由原中国保险监督管理委员会批准设立的全国性、股份制专业寿险公司，目前注册资本为38亿元。</li>
    </ul>
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
.tab2 {
  ul li {
    &:nth-of-type(1) {
      font-size: 44px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 50px;
    }

    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(136, 136, 136, 1);
      line-height: 48px;
      padding: 0 0 0 50px;
    }
    &:nth-of-type(6) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(77, 142, 250, 1);
      line-height: 28px;
      padding: 30px 0 0 50px;
    }

    &:nth-of-type(7) {
      font-size: 34px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 48px;
      padding: 50px 0 30px 50px;
    }

    &:nth-of-type(8) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(136, 136, 136, 1);
      line-height: 48px;
      padding: 0 50px 50px 50px;
    }
  }
}
</style>
