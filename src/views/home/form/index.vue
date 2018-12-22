<template>
  <div class="form">
    <vm-header></vm-header>

    <div class="content">
      <div class="title">投保人信息</div>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">姓名</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入姓名"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">身份证号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输身份证号"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">手机号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输手机号"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">验证码</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输验证码"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">电子邮箱</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请电子邮箱"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">详细地址</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="详细地址"></x-input>
        </flexbox-item>
      </flexbox>
      <div class="title">被保人信息</div>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">为谁投保</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="group-btn-cell">
            <span
              v-for="(item,index) in item"
              :key="index"
              :class="item.isactive?'group-btn-active':'group-btn'"
              @click="modifyButtonStatus('item',index)"
            >{{item.key}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">姓名</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入姓名"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">身份证号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="身份证号"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">受益人</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="受益人"></x-input>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">银行卡号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="银行卡号"></x-input>
        </flexbox-item>
      </flexbox>
      <div class="title">保障计划</div>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">保障期限</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="item-left group-btn-cell">终身</div>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">缴费期限</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="group-btn-cell">
            <span
              v-for="(item,index) in item2"
              :key="index"
              :class="item.isactive?'group-btn-active':'group-btn'"
              @click="modifyButtonStatus('item2',index)"
            >{{item.key}}</span>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">缴费方式</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="group-btn-cell">
            <span
              v-for="(item,index) in item3"
              :key="index"
              :class="item.isactive?'group-btn-active':'group-btn'"
              @click="modifyButtonStatus('item3',index)"
            >{{item.key}}</span>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">购买份数</div>
        </flexbox-item>
        <flexbox-item :span="5">
          <x-number></x-number>
        </flexbox-item>
        <flexbox-item :span="3">500元/份</flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">领取年金</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="item-left group-btn-cell">
            <span  style="color:#F85C58">599.37元/月</span>至终身
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box" style="margin-bottom: 10px">
        <flexbox-item :span="1">
          <div class="aggree">
            <img src="../../../assets/agree/agree.svg" alt>
          </div>
        </flexbox-item>

        <flexbox-item :span="11">
          <p
            style="color:#666666;font-size:14px;margin-right:10px"
          >我已阅读并同意《保险条款》《投保须知》《人身保险投保提示书》和《平台服务协议》</p>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box">
        <flexbox-item :span="12">
          <vm-footer :text="btntext" @onBtnClick="showpopup"></vm-footer>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import vmHeader from "@/components/common/vmHeader";
import VmFooter from "./vmFooter";
import { Flexbox, FlexboxItem, Datetime, XNumber, XInput } from "vux";
import _ from "lodash";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Datetime,
    XNumber,
    vmHeader,
    XInput,
    VmFooter
  },
  props: {},
  data() {
    return {
      btntext: "立即投保",
      time1: "请选择被保人年龄",
      item: [
        {
          key: "本人",
          value: "",
          isactive: true
        },
        {
          key: "未成年子女",
          value: "",
          isactive: false
        }
      ],
      item2: [
        {
          key: "10年",
          value: "",
          isactive: true
        },
        {
          key: "15年",
          value: "",
          isactive: false
        },
        {
          key: "20年",
          value: "",
          isactive: false
        }
      ],
      item3: [
        {
          key: "月缴",
          value: "",
          isactive: true
        },
        {
          key: "年缴",
          value: "",
          isactive: false
        }
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
.form {
  background: #ffffff;

  .title {
    font-size: 40px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 56px;
    padding: 30px 0 30px 25px;
  }

  .item-left {
    // padding-left: 25px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 40px;
  }

  .item-datetime {
    color: #666666;
    font-size: 28px;
  }

  .group-btn {
    padding: 9px 40px 9px 40px;

    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
    border-radius: 54px;
    margin-right: 5px;

    font-size: 26px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 37px;
  }

  .group-btn-active {
    padding: 9px 40px 9px 40px;
    background: linear-gradient(
      90deg,
      rgba(121, 189, 253, 1) 0%,
      rgba(109, 163, 251, 1) 100%
    );
    border-radius: 54px;
    margin-right: 5px;
    font-size: 26px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 37px;
  }

  .ul-description li {
    padding: 5px 25px 5px 25px;
    color: #666666;
    font-size: 24px;
  }

  .ul-description li:nth-of-type(1) {
    color: #444444;
    font-size: 28px;
  }

  .tip {
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 33px;
    padding: 0 21px 24px 30px;
  }

  .aggree {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin: 25px;
    }
  }

  .row {
    border-bottom: 1px solid #e5e5e5 !important;
  }

  .content {
    margin: 0 25px;
  }

  .group-btn-cell {
    padding: 0 0 15px 0;
  }
}
</style>
