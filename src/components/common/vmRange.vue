<template>
  <div class="range">
    <div class="title">保障范围</div>
    <ul>
      <li>
        <span>终身领取</span>
        <span>最高可达月/年交保费的6</span>
      </li>
      <li>
        <span>保障年龄</span>
        <span>28天-55周岁</span>
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
    padding: 0 0 0 24px;
  }
  .view a {
    color: #4b8dfa;
    font-size: 28px;
    padding: 0 0 0 24px
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    padding: 0 24px 24px 24px;
    span {
      font-size: 28px;
    }

    span:nth-of-type(1) {
      color: #444444;
    }
  }
}
</style>
