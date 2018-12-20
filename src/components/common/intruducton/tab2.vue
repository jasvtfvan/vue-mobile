<template>
  <div class="tab2">
    <p class="title">购买须知</p>
    <ul>
      <li>使用人群: 30天至50周岁</li>
      <li>使用人群: 30天至50周岁</li>
      <li>使用人群: 30天至50周岁</li>
      <li>使用人群: 30天至50周岁</li>
    </ul>
    <div class="view">
      查看
      <a href="#"><<更多投保须知>></a>
    </div>

    <p class="company-title">保险公司介绍</p>
    <p
      class="company-content"
    >国华人寿保险股份有限公司成立于2007年11月，总部位于上海市地标建筑上海中心大厦,注册地湖北武汉。是由原中国保险监督管理委员会批准设立的全国性、股份制专业寿险公司，目前注册资本为38亿元。</p>
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
  clear: both;
  .title {
    color: #444444;
    font-size: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li {
    clear: both;
    color: #888888;
    font-size: 26px;
  }

  .view {
    clear: both;
    color: #4d8efa;
    font-size: 28px;
    padding-left: 30px;

    a {
      color: #4d8efa;
      font-size: 28px;
      font-weight: Medium;
    }
  }

  .company-title {
    color: #444444;
    font-size: 34px;
    font-weight: normal;
    margin: 70px 0 20px 33px;
  }

  .company-content {
    color: #888888;
    font-size: 28px;
    font-weight: normal;
    margin: 0 33px 0 33px;
  }
}
</style>
