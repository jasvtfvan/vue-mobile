<template>
  <footer class="vm-1px-t">
    <flexbox>
      <flexbox-item :span="2">
        <div class="custome">
          <img src="../../assets/custom.jpg" alt>
          <p class="custome">客服</p>
        </div>
      </flexbox-item>
      <flexbox-item :span="5">
        <div class="flex-demo left">
          <span>￥1000</span>
          <span>/年起</span>
        </div>
      </flexbox-item>
      <flexbox-item :span="5">
        <div class="flex-demo right" @click="showpopup()">
          <span>{{!isPopup?text:"去投保"}}</span>
        </div>
      </flexbox-item>
    </flexbox>
  </footer>
</template>
<script>
import { SWITCH_MENU } from "@/constants/publicTypes";
import { mapMutations, mapGetters } from "vuex";
import { Flexbox, FlexboxItem, Datetime, Group } from "vux";

export default {
  props: {
    text: String,
    isPopup: Boolean
  },
  components: {
    Flexbox,
    FlexboxItem,
    Datetime,
    Group
  },
  data() {
    return {
      time1: "2018-07-12"
    };
  },
  computed: {
    ...mapGetters(["menuIndex"]),
    index() {
      return this.menuIndex;
    }
  },
  methods: {
    ...mapMutations([SWITCH_MENU]),
    switchMenu(index) {
      this[SWITCH_MENU](index);
    },

    showpopup() {
      console.log(this.isPopup);
      this.$emit("onBtnClick");

      //去投保
      // if (this.isPopup) {
      //   console.log("if");
      //   this.$router.push({
      //     path: "/health"
      //   });
      // } else {
      //   console.log("else");
      //   this.$emit("onBtnClick");
      // }
    },

    goHomePage() {
      this.$vux.toast.show({
        text: "首页",
        type: "text"
      });
    },
    goFavorite() {
      this.$vux.toast.show({
        text: "收藏",
        type: "text"
      });
    },
    goScanning() {
      this.$vux.toast.show({
        text: "扫描",
        type: "text"
      });
    },
    goShopcart() {
      this.$vux.toast.show({
        text: "购物车",
        type: "text"
      });
    },
    goPhoneBook() {
      this.$vux.toast.show({
        text: "通讯录",
        type: "text"
      });
    }
  }
};
</script>
<style lang="less" scoped>
footer {
  width: 100%;
  position: fixed;
  height: 110px;
  left: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  align-items: center;

  .custome {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 17px 0 7px 10px;
    justify-content: center;
    text-align: center;
    // padding: 10px 0;
    img {
      width: 45px;
      height: 45px;
      position: relative;
      top: 8px;
    }
    p {
      font-size: 22px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(119, 126, 143, 1);
      // line-height: 30px;
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 60px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      line-height: 84px;
    }
    span:nth-child(1) {
      color: rgba(248, 92, 88, 1);
    }

    span:nth-child(2) {
      font-size: 24px;
      color: rgba(136, 136, 136, 1);
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    background: linear-gradient(
      90deg,
      rgba(255, 185, 0, 0.9) 0%,
      rgba(254, 131, 0, 0.8) 100%
    );

    span {
      font-size: 36px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 34px;
    }
  }
}
</style>
