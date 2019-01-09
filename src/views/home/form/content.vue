<template>
  <div class="content">
    <ul>
      <li>
        国民超级年金险
        <img src="../../../assets/home/close.svg" alt @click="close('show')">
      </li>
      <li>
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
        国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    close(val) {
      console.log("close");
      //this.$parent.hideContent(val);

      this.$emit("hideContent",val);

    }
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.content {
  background: #ffffff;
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
    img {
      height: 30px;
      width: 50px;
    }

    &:nth-of-type(1) {
      display: flex;
      justify-content: center;
      //   font-size: 28px;
      //   font-family: PingFangSC-Regular;
      //   font-weight: 400;
      //   color: rgba(187, 187, 187, 1);
      //   line-height: 40px;

      img {
        position: absolute;
        right: 20px;
      }
    }
  }
}
</style>