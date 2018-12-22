<template>
  <div class="range">
    <div class="title">保障范围</div>
    <ul>
      <li>
        <span>终身领取</span>
        <span>最高可达月/年交保费的61%</span>
      </li>
      <li>
        <span>身故保障金</span>
        <span>至少返还全部已交保费</span>
      </li>
    </ul>
    <div class="view">
      <a href="#">查看详情 ></a>
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
.range {
  .title {
    padding: 0 0 24px 24px;
    font-size: 40px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(68, 68, 68, 1);
    line-height: 56px;
  }
  .view a {
    padding: 0 0 0 24px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(75, 141, 250, 1);
    line-height: 40px;
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    padding: 0 24px 24px 24px;
    span {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      line-height: 40px;
    }

    span:nth-of-type(1) {
      color: rgba(136, 136, 136, 1);
    }

    span:nth-of-type(2) {
      color: rgba(68, 68, 68, 1);
    }
  }
}
</style>
