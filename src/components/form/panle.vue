<template>
  <div class="panel">
    <div class="title">保费试算</div>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">为谁投保</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <span
          v-for="(item,index) in item"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">出生日期</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <datetime title v-model="time1" value-text-align="left" class="item-datetime"></datetime>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">保障期限</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <div class="item-left">终身</div>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">缴费期限</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <span
          v-for="(item,index) in item2"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item2',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">缴费方式</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <span
          v-for="(item,index) in item3"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item3',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">购买份数</div>
      </flexbox-item>
      <flexbox-item :span="5">
        <x-number></x-number>
      </flexbox-item>
      <flexbox-item :span="3">500元/份</flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">领取年金</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <div class="item-left">
          <span style="color:#F85C58">599.37元/月</span>至终身
          </div>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="12">
        <ul class="ul-description">
          <li>您将获得的保障利益是：</li>
          <li>  1.每年交1000元，交费满5年后开始领取，每年领取599.37元至终身，若不领取则自动进入累计生息账户；</li>
          <li>2.保障期限内，若被保险人不幸身故，将返还现金价值与已交保险费的较大者给法定受益人。 </li>      
        </ul>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Datetime, XNumber } from "vux";
import _ from "lodash";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Datetime,
    XNumber
  },
  props: {},
  data() {
    return {
      time1: "请选择被保人年龄",
      item: [
        { key: "本人", value: "", isactive: true },
        { key: "未成年子女", value: "", isactive: false }
      ],
      item2: [
        { key: "10年", value: "", isactive: true },
        { key: "15年", value: "", isactive: false },
        { key: "20年", value: "", isactive: false }
      ],
      item3: [
        { key: "月缴", value: "", isactive: true },
        { key: "年缴", value: "", isactive: false }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    modifyButtonStatus(val, item) {
      if (val === "item") {
        _.forEach(this.item, (value, key) => {
          if (item === key) {
            value.isactive = true;
          } else {
            value.isactive = false;
          }
        });
      }

      if (val === "item2") {
        _.forEach(this.item2, (value, key) => {
          if (item === key) {
            value.isactive = true;
          } else {
            value.isactive = false;
          }
        });
      }

      if (val === "item3") {
        _.forEach(this.item3, (value, key) => {
          if (item === key) {
            value.isactive = true;
          } else {
            value.isactive = false;
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.panel {
  background: #ffffff;
  .title {
    color: #444444;
    font-size: 40px;
    padding: 30px 0 30px 25px;
  }
  .item-left {
    padding-left: 25px;
    color: #666666;
    font-size: 28px;
  }

  .flex-box {
    margin-bottom: 10px;
  }

  .item-datetime {
    color: #666666;
    font-size: 28px;
  }

  .group-btn {
    padding: 9px 40px 9px 40px;
    color: #666666;
    font-size: 26px;
    min-width: 140px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
    border-radius: 54px;
    margin-right: 5px;
  }

  .group-btn-active {
    padding: 9px 40px 9px 40px;
    color: #666666;
    font-size: 26px;
    min-width: 140px;
    background: linear-gradient(
      90deg,
      rgba(121, 189, 253, 1) 0%,
      rgba(109, 163, 251, 1) 100%
    );
    border-radius: 54px;
    margin-right: 5px;
    color: #ffffff;
  }

  .ul-description li{
    padding: 5px 25px 5px 25px;
    color: #666666;
    font-size: 24px

  }

  .ul-description li:nth-of-type(1){
    color: #444444;
    font-size: 28px
  }
}
</style>
