<template>
  <div class="health">
    <vm-header></vm-header>
    <card></card>
    <health-btn></health-btn>
  </div>
</template>
<script>
import vmHeader from "@/components/common/vmHeader";
import healthBtn from "@/components/common/button/health";
import card from "./placard";
export default {
  components: {
    vmHeader,
    healthBtn,
    card
  },
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
.health {
  .tip-icon {
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
</style>
