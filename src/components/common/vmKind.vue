<template>
  <div class="kind">
    <ul>
      <li>
        <span>保障年龄</span>
        <span>28天-55周岁</span>
      </li>
      <li>
        <span>保障年龄</span>
        <span>28天-55周岁</span>
      </li>
      <li>
        <span>保障年龄</span>
        <span>28天-55周岁</span>
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
    span {
      font-size: 28px;
    }

    span:nth-of-type(1) {
      color: #888888;
    }
  }
}
</style>
