<template>
  <footer class="vm-1px-t">
    <flexbox >
      <flexbox-item :span="2">
        <div class="flex-demo">客服</div>
      </flexbox-item>
      <flexbox-item :span="5">
        <div class="flex-demo left">
          <span>￥100</span>
          <span>/年起</span>
        </div>
      </flexbox-item>
      <flexbox-item :span="5">
        <div class="flex-demo right" @click="showpopup(show1)">
          <span>立即投保</span>
        </div>
      </flexbox-item>
    </flexbox>

    <popup v-model="show1">
      <!-- <group label-width="5.5em" label-margin-right="2em" label-align="justify">
           <datetime title="" v-model="time1" value-text-align="left"></datetime>
      </group>-->
      <!-- 1111111111111111111 -->
      <panle></panle>
    </popup>
  </footer>
</template>
<script>
import { SWITCH_MENU } from "@/constants/publicTypes";
import { mapMutations, mapGetters } from "vuex";
import { Flexbox, FlexboxItem, Divider, Popup, Datetime, Group } from "vux";
import panle from "../form/panle.vue";
export default {
  props: {},
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Popup,
    Datetime,
    Group,
    panle
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
    span:nth-child(1) {
      color: #f85c58;
      font-size: 60px;
    }

    span:nth-child(2) {
      color: #888888;
      font-size: 24px;
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
