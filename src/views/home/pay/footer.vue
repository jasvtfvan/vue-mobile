<template>
  <div class="pay-footer">确认支付</div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.pay-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background: linear-gradient(
    90deg,
    rgba(255, 185, 0, 0.9) 0%,
    rgba(254, 131, 0, 0.8) 100%
  );
  color: #ffffff;
  font-size: 36px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
