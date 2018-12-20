<template>
  <div class="home">
    <vm-header></vm-header>
    <vm-banner></vm-banner>
    <vm-feature></vm-feature>
    <vm-kind></vm-kind>
    <vm-range></vm-range>
    <vm-footer></vm-footer>
    <!-- 
    <vm-fixed-btn></vm-fixed-btn> -->
    <anchor></anchor>
    <!-- <intruducton></intruducton> -->
    <!-- <anchorNav></anchorNav> -->
  </div>
</template>

<script>
import vmHeader from "@/components/common/vmHeader";
import VmFooter from "@/components/common/vmFooter";
import vmBanner from "@/components/common/vmBanner";
import vmFeature from "@/components/common/vmFeature";
import vmKind from "@/components/common/vmKind";
import vmRange from "@/components/common/vmRange";
import vmFixedBtn from "@/components/common/vmFixedBtn";
import anchor from "@/components/common/anchor";
import intruducton from "@/components/common/intruducton/intruducton";


import getDpr from "@/utils/getDpr";
import { mapActions } from "vuex";
import { LOGOUT, GET_USER_INFO } from "@/constants/apiTypes";
export default {
  components: {
    VmFooter,
    vmHeader,
    vmBanner,
    vmFeature,
    vmKind,
    vmRange,
    vmFixedBtn,
    anchor,
    intruducton,
  },
  name: "home",
  data() {
    return {
      logoSrc: null,
      isExiting: false,
      exitStyle: {
        background: "#00beda"
      }
    };
  },
  watch: {
    isExiting: function(newVal, preVal) {
      this.exitStyle.background = this.isExiting ? "#50ba53" : "#00beda";
    }
  },
  created() {
    const dpr = getDpr();
    this.logoSrc = require("@/assets/logo@" + dpr + "x.png");
  },
  mounted() {},
  methods: {
    ...mapActions([LOGOUT, GET_USER_INFO]),
    logout() {
      this.isExiting = true;
      this[LOGOUT]()
        .then(res => {
          this.isExiting = false;
          this.$router.replace({ path: "/" }, () => {
            this.$vux.toast.show("成功退出!");
            // location.reload();
          });
        })
        .catch(() => {
          this.isExiting = false;
        });
    },
    getUserInfo() {
      this[GET_USER_INFO]()
        .then(res => {
          console.log("getUserInfo:::res:::", res);
          const resData = res.data || {};
          if (res.success) {
            this.$vux.alert.show({
              title: `Hello ${resData.nick}`,
              content: JSON.stringify(res.data)
            });
          }
        })
        .catch(error => {
          console.log("getUserInfo:::error:::", error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/modules/home.less";
@import "~@/styles/base/mobile.less";

.logout {
  width: 140px;
  height: 56px;
  line-height: 56px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  display: block;
  position: absolute;
  right: 20px;
  top: 20px;
  &.btnType1 {
    display: block;
    background: #00beda;
    border-radius: 6px;
    color: #fff;
    text-decoration: none;
    font-size: 32px;
  }
}
a.iconfont {
  .setTapColor(rgba(0, 0, 0, 0));
}
</style>
