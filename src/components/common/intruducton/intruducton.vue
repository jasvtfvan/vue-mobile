<template>
  <div class="intruducton">
    <vmmenu></vmmenu>

    <tab1></tab1>
    <tab2></tab2>
    <tab3></tab3>
    <tab4></tab4>
  </div>
</template>
<script>
import tab1 from "./tab1.vue";
import tab2 from "./tab2.vue";
import tab3 from "./tab3.vue";
import tab4 from "./tab4.vue";
import vmmenu from "./vmmenu.vue";
export default {
  components: { tab1, tab2, tab3, tab4, vmmenu },
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
</style>
