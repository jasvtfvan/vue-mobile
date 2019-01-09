<template>
  <div class="protocol">
    <ul>
      <li>平台服务协议</li>
      <li @click="showContent">
        <span>保险经纪服务委托协议</span>
        <img src="../../../assets/home/left.svg" alt>
      </li>
      <li @click="show2=true">
        <span>投保人税收居民身份声明书</span>
        <img src="../../../assets/home/left.svg" alt>
      </li>
      <li @click="show=true">
        <span>中元保险经纪有限公司客户告知书</span>
        <img src="../../../assets/home/left.svg" alt>
      </li>

       <div v-transfer-dom>
        <popup v-model="show" position="bottom" max-height="50%">
            <content1 @hideContent='hideContent'></content1>
        </popup>
      </div>

       <div v-transfer-dom>
        <popup v-model="show2" position="bottom" max-height="50%">
            <content2 @hideContent='hideContent'></content2>
        </popup>
      </div>
    </ul>
  </div>
</template>

<script>

import { TransferDom, Popup } from "vux";
import _ from "lodash";
import content1 from "./content";
import content2 from "./content2";
export default {
  methods: {
    showContent(val) {
      this.show = true;
    },
    hideContent(val){

        if(val=="show"){
            this.show=false;
        }

        if(val=="show2"){
            this.show2=false;
        }

    }
  },
  directives: {
    TransferDom
  },
  components: {
    Popup,
    content1,
    content2
  },
  data: function() {
    return {
      show: false,
      show2: false,
      show3: false,
      currentItem: "",
      data: [
        {
          show: false,
          titile: "保险经纪服务委托协议",
          sub: "子项111111111111111111111"
        },
        {
          show: false,
          titile: "投保人税收居民身份声明书",
          sub: "子项22222222222222222222222222222"
        },
        {
          show: false,
          titile: "中元保险经纪有限公司客户告知书",
          sub: "子项345435444444444444444"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.protocol {
  background: #ffffff;
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    img {
      height: 30px;
      width: 50px;
    }

    &:nth-of-type(1) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
