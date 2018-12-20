<template>
  <footer class="vm-1px-t">
    <flexbox >
      <flexbox-item :span="6">
        <div class="flex-demo left">
          <span>部分情况有</span>
        </div>
      </flexbox-item>
      <flexbox-item :span="6">
        <div class="flex-demo right" @click="showpopup(show1)">
          <span>以上情况全无</span>
        </div>
      </flexbox-item>
    </flexbox>

  </footer>
</template>
<script>
import { SWITCH_MENU } from "@/constants/publicTypes";
import { mapMutations, mapGetters } from "vuex";
import { Flexbox, FlexboxItem, Divider, Popup, Datetime, Group } from "vux";
export default {
  props: {},
  components: {
    Flexbox,
    FlexboxItem,
  },
  data() {
    return {
      show1: true,
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

    showpopup(val) {
      this.show1 = !val;
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

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    span:nth-child(1) {
      color: #444444;
      font-size: 36;
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
      color: #ffffff;
    }
  }
}
</style>
