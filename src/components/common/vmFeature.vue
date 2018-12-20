<template>
  <div class="feature">
    <span class="title">
      <span>国华人寿承保</span>
      <img src="../../assets/disable.svg" alt>
    </span>
  <ul>
    <li>仅90天等待期，</li>
    <li>仅90天等待期，保障责任更全 小投入高杠杆，150万保额免体检</li>
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
.feature {
  background: #FFFFFF;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 40px;
      color: #444444;
      margin-left: 24px;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 24px;
    }
  }

  ul li{
    color: #666666;
    font-size: 28px;
    margin-left: 24px
  }
}
</style>
