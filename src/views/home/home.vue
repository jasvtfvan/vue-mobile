<template>
<div class="home">
  <!-- 内容开始 -->
  <article>
    <section class="index-top">
      <img :src = 'logoSrc' >
      <a href="javascript:;" class="btnType1 logout" :style="exitStyle" @click="logout">退出</a>
    </section>
    <section class="index-main vm-1px-tb">
      <a href="javascript:;" class="iconfont">
          <span class="icon-smile"></span>
      </a>
      <a href="javascript:;" class="iconfont">
          <span class="icon-atm"></span>
      </a>
      <a href="javascript:;" class="iconfont">
          <span class="icon-service"></span>
      </a>
      <a href="javascript:;" class="iconfont">
          <span class="icon-rfq1"></span>
      </a>
    </section>
    <section class="index-main vm-1px-b">
      <ul>
        <li>
            <a href="javascript:;" class="btnType1" @click="getUserInfo">用户信息</a>
        </li>
        <li>
            <router-link href="javascript:;" class="btnType1" :to="{path: 'vw'}">vwlayout</router-link>
        </li>
        <li>
            <a href="javascript:;" class="btnType1">scroll1</a>
        </li>
        <li>
            <a href="javascript:;" class="btnType1">scroll2</a>
        </li>
      </ul>
    </section>
  </article>
  <!-- 内容结束 -->
  <vm-footer></vm-footer>
</div>
</template>

<script>
import VmFooter from '@/components/common/vmFooter';
import getDpr from '@/utils/getDpr';
import {mapActions} from 'vuex';
import {LOGOUT, GET_USER_INFO} from '@/constants/apiTypes';
export default {
  components: {
    VmFooter
  },
  name: 'home',
  data() {
    return{
      logoSrc: null,
      isExiting: false,
      exitStyle: {
        background: '#00beda'
      }
    }
  },
  watch: {
    isExiting: function (newVal, preVal) {
      this.exitStyle.background = this.isExiting ? '#50ba53' : '#00beda';
    }
  },
  created(){
    const dpr = getDpr();
    this.logoSrc = require('@/assets/logo@'+dpr+'x.png');
  },
  mounted(){
  },
  methods: {
    ...mapActions([LOGOUT, GET_USER_INFO]),
    logout() {
      this.isExiting = true;
      this[LOGOUT]().then(res => {
        this.isExiting = false;
        this.$router.replace({path: '/'}, () => {
          this.$vux.toast.show('成功退出!');
          // location.reload();
        });
      }).catch(() => {
        this.isExiting = false;
      });
    },
    getUserInfo() {
      this[GET_USER_INFO]().then(res => {
        console.log('getUserInfo:::res:::', res);
        const resData = res.data || {};
        if (res.success) {
          this.$vux.alert.show({
            title: `Hello ${resData.nick}`,
            content: JSON.stringify(res.data),
          });
        }
      }).catch(error => {
        console.log('getUserInfo:::error:::', error);
      });
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/styles/modules/home.less';
  @import '~@/styles/base/mobile.less';
  .logout{
    width:140px; 
    height:56px; 
    line-height:56px; 
    font-size:32px; 
    color:#fff; 
    text-align:center; 
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    &.btnType1{
      display:block; 
      background:#00beda; 
      border-radius:6px; 
      color:#fff; 
      text-decoration:none;
      font-size:32px;
    }
  }
  a.iconfont{
    .setTapColor(rgba(0,0,0,0));
  }
</style>
