<template>
  <footer class="vm-1px-t">
    <a class="iconfont" :class="{active: index === 0}" href="javascript:;" @click="switchMenu(0);goHomePage()">
      <i class="icon-smile"></i>
      <span>首页</span>
    </a>
    <a class="iconfont" :class="{active: index === 1}" href="javascript:;" @click="switchMenu(1);goFavorite()">
      <i class="icon-favorite"></i>
      <span>收藏</span>
    </a>
    <a href="javascript:;" :class="{active: index === 2}" class="iconfont" @click="switchMenu(2);goScanning()">
      <i class="icon-scanning"></i>
      <span>扫码</span>
    </a>
    <a href="javascript:;" :class="{active: index === 3}" class="iconfont" @click="switchMenu(3);goShopcart()">
      <i class="icon-cart"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" :class="{active: index === 4}" class="iconfont" @click="switchMenu(4);goPhoneBook()">
      <i class="icon-account"></i>
      <span>我的</span>
    </a>
</footer>
</template>
<script>
import { SWITCH_MENU } from '@/constants/publicTypes';
import { mapMutations, mapGetters } from 'vuex';
export default {
  props: {},
  data() {
    return{
    }
  },
  computed: {
    ...mapGetters(['menuIndex']),
    index() {
      return this.menuIndex;
    }
  },
  methods: {
    ...mapMutations([SWITCH_MENU]),
    switchMenu(index) {
      this[SWITCH_MENU](index);
    },
    goHomePage() {
      this.$vux.toast.show({
        text: '首页',
        type: 'text'
      });
    },
    goFavorite() {
      this.$vux.toast.show({
        text: '收藏',
        type: 'text'
      });
    },
    goScanning() {
      this.$vux.toast.show({
        text: '扫描',
        type: 'text'
      });
    },
    goShopcart() {
      this.$vux.toast.show({
        text: '购物车',
        type: 'text'
      });
    },
    goPhoneBook() {
      this.$vux.toast.show({
        text: '通讯录',
        type: 'text'
      });
    },
  }
}
</script>
<style lang="less" scoped>
footer{
  width:100%;
  position:fixed;
  height: 150px;
  left:0; 
  bottom:0; 
  z-index:999; 
  background:#FFF;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  a{
    width:20%;
    text-align:center;
    margin: auto 0;
  }
  i{
    display:inline-block;
    font-size:52px;
    font-style:normal; 
    color:#929292; 
  }
  span{
    display:block; 
    color:#929292;
    font-size: 32px;
  }
  .active{
    span{
      color:#06be6b;
    }
    i{
      color:#06be6b; 
    }
  }
}
</style>
