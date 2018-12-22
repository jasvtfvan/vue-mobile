<template>
  <div class="kind">
    <ul>
      <li>
        <span>保障年龄</span>
        <span>28天-55周岁</span>
      </li>
      <li>
        <span>保障期限</span>
        <span>终身</span>
      </li>
      <li>
        <span>交费期限</span>
        <span>10年/15年/20年</span>
      </li>
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
.kind {
  background: #ffffff;
  margin-top: 40px;
  ul > li {
    display: flex;
    justify-content: space-between;
    padding: 0 24px 24px 24px;

    span:nth-of-type(1) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(136, 136, 136, 1);
      line-height: 40px;
    }

    span:nth-of-type(2) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 40px;
    }
  }
}
</style>
