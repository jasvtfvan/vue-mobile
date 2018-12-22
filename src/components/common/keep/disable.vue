<template>
  <div class="keep">
    <img src="../../../assets/able.svg" alt>
    <p>收藏</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.keep {
  text-align: center;
  margin-right: 30px;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 33px;
    position: relative;
    top: -7px;
  }
}
</style>
