<template>
  <div class="card">
    <div class="tip">
      <span class="tip-icon">重要</span>
      <span>为了保证被保人的保险权益在理赔时不受影响，请确认被保人健康状况是否符合投保条件：</span>
    </div>
    <ul>
      <li>1.您是否在投保或复效时被拒保、延期、加费或除外责任承保？或被解除过保险合同？或申请过重大疾病理赔？</li>
      <li>2.您最近1年内是否因健康异常发生过住院或手术,或由医师给您提出进一步检查、住院或手术的建议?</li>
      <li>3.您是否目前或过去一年内曾有过下列症状？</li>
      <li>4.您是否目前患有或过去曾经患过下列疾病？</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
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
.card {
  .tip {
    background: #ffecd1;
    padding: 20px 16px 20px 30px;
    .tip-icon {
      padding: 11px 24px 11px 24px;
      color: #ffffff;
      width: 96px;
      height: 44px;
      background: linear-gradient(
        90deg,
        rgba(255, 185, 0, 0.9) 0%,
        rgba(254, 131, 0, 0.8) 100%
      );
      border-radius: 6px;
    }
  }

  ul li {
      padding: 27px 17px 30px 30px;
      color: #444444;
      font-size: 30px
  }
}
</style>
