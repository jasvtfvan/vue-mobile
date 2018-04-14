<template>
  <footer class="vm-1px-t">
    <a class="active iconfont" href="javascript:;">
      <i class="icon-smile"></i>
      <span>首页</span>
    </a>
    <a class="iconfont" href="javascript:;">
      <i class="icon-favorite"></i>
      <span>收藏</span>
    </a>
    <a href="javascript:;" class="iconfont" >
      <i class="icon-scanning"></i>
      <span>扫码</span>
    </a><a href="javascript:;" class="iconfont">
      <i class="icon-cart"></i>
      <span>购物车</span>
    </a><a href="javascript:;" class="iconfont">
      <i class="icon-account"></i>
      <span>我的</span>
    </a>
</footer>
</template>
<script>
export default {
  props: {},
  data() {
    return{
    }
  },
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
