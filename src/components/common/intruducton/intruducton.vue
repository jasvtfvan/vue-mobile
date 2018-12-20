<template>
  <div class="intruducton">
    <ul>
      <li>
        <a href="#1" class="active-a">产品介绍</a>
      </li>
      <li>
        <a href="#2">购买须知</a>
      </li>
      <li>
        <a href="#3">理赔说明</a>
      </li>
      <li>
        <a href="#4">常见问题</a>
      </li>
    </ul>
    <div id="1">
      <tab1></tab1>
    </div>
    <div class="content2" id="2">
      <tab2></tab2>
    </div>
    <div class="content3" id="3"></div>
    <div class="content4" id="4"></div>
  </div>
</template>
<script>
import tab1 from "./tab1.vue";
import tab2 from "./tab2.vue";
export default {
  components: { tab1, tab2 },
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
.intruducton {
  margin: 36px 34px 36px 34px;
  ul li {
    float: left;
    margin-left: 30px;

    a {
      color: #666666;
      font-size: 28px;
      padding: 13px;
    }

    .active-a {
      width: 250px;
      height: 65px;
      color: #ffffff;
      background: linear-gradient(
        90deg,
        rgba(121, 189, 253, 1) 0%,
        rgba(109, 163, 251, 1) 100%
      );
      border-radius: 54px;
    }
  }

  .content3 {
  }
}
</style>
