<template>
  <header class="vm-1px-b">
    <a class="btn-back iconfont" href="javascript:;" @click="goBack()">
      <i class="icon-back"></i>
    </a>
    {{headerText}}
    <img src="../../assets/more.svg" style="width:25px;margin-right:5px">
  </header>
</template>
<script>
export default {
  props: {
     headerText: String,
  },
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
header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: white;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  font-size: 34px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(68, 68, 68, 1);
  a {
    &.btn-back {
      color: #333;
      padding: 0 20px;
      height: 100px;
      line-height: 100px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      i {
        font-size: 52px;
        font-style: normal;
      }
      span {
        font-size: 36px;
      }
    }
  }
}
</style>
