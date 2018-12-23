<template>
  <div class="form">
    <vm-header :headerText="headerText"></vm-header>

    <div class="content">
      <div class="title">投保人信息</div>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">姓名</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入投保人姓名" v-model="part1.name"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">身份证号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输投保人身份证号" v-model="part1.number"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">手机号</div>
        </flexbox-item>
        <flexbox-item :span="6">
          <x-input placeholder="请输入投保人手机号" v-model="part1.phone"></x-input>
        </flexbox-item>
        <flexbox-item :span="2">
          <span class="item-left" @click="getCode">{{codeText}}</span>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">验证码</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入验证码" v-model="part1.code"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">电子邮箱</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入电子邮箱" v-model="part1.email"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">详细地址</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入详细地址" v-model="part1.address"></x-input>
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
          <x-input placeholder="请输入被保人姓名" v-model="part2.name"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row">
        <flexbox-item :span="4">
          <div class="item-left">身份证号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入被保人身份证号" v-model="part2.number"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">受益人</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入受益人" v-model="part2.person"></x-input>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">银行卡号</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <x-input placeholder="请输入银行卡号" v-model="part2.bank"></x-input>
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
        <flexbox-item :span="3">
          <div class="item-left">购买份数</div>
        </flexbox-item>
        <flexbox-item :span="6">
          <x-number v-model="count"></x-number>
        </flexbox-item>
        <flexbox-item :span="3">500元/份</flexbox-item>
      </flexbox>

      <flexbox class="flex=box row" style="margin-bottom: 10px">
        <flexbox-item :span="4">
          <div class="item-left">领取年金</div>
        </flexbox-item>
        <flexbox-item :span="8">
          <div class="item-left group-btn-cell">
            <span style="color:#F85C58">
              {{this.getPayType()==="P0000016_1"?500*this.count:1000*this.count}}元/
              {{this.getPayType()==="P0000016_1"?'月':'年'}}
            </span>至终身
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box" style="margin-bottom: 10px">
        <flexbox-item :span="1">
          <div class="aggree" @click="agree=!agree;">
            <img src="../../../assets/agree/agree.svg" alt v-if="agree">
            <img src="../../../assets/agree/disagree.svg" alt v-else>
          </div>
        </flexbox-item>

        <flexbox-item :span="11">
          <p
            style="color:#666666;font-size:14px;margin-right:10px"
          >我已阅读并同意《投保须知》《人身保险投保提示书》和《平台服务协议》</p>
        </flexbox-item>
      </flexbox>

      <flexbox class="flex=box">
        <flexbox-item :span="12">
          <!-- <vm-footer :text="btntext" @onBtnClick="showpopup"></vm-footer> -->
          <footer class="vm-1px-t">
            <flexbox>
              <flexbox-item :span="2">
                <div class="custome">
                  <img src="../../../assets/custom.jpg" alt>
                  <p class="custome">客服</p>
                </div>
              </flexbox-item>
              <flexbox-item :span="5">
                <div class="flex-demo left">
                  <span>￥{{this.getPayType()==="P0000016_1"?500*this.count:1000*this.count}}</span>
                  <span>{{this.getPayType()==="P0000016_1"?'/月起':'/年起'}}</span>
                </div>
              </flexbox-item>
              <flexbox-item :span="5">
                <div class="flex-demo right" @click="onSubmit">
                  <span>立即支付</span>
                </div>
              </flexbox-item>
            </flexbox>
          </footer>
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
import {
  patternFn,
  testNumber,
  testPhone,
  testEmail,
  luhnCheck
} from "@/utils/utils";
import { $vux } from "@/main";
import { throws } from "assert";
import { orderSave } from "@/apis/modules/home";
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
      headerText: "填写投保信息",
      btntext: "立即投保",
      time1: "请选择被保人年龄",
      agree: false,
      count: 1,
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
        { key: "月缴", value: "P0000016_1", isactive: true },
        { key: "年缴", value: "P0000016_2", isactive: false }
      ],

      //投保人
      part1: {
        name: "",
        number: "",
        phone: "",
        code: "",
        email: "",
        address: ""
      },

      //被保人
      part2: {
        name: "",
        number: "",
        person: "", //受益人
        bank: "",
        target: "" //为谁投保
      },

      //保障计划
      plan: {
        // item:"1000Y",//productPeriod: "1000Y",
        // item2:this.getTerm(),
        // item3:this.getPayType(),
        // item4:this.buyCount

        item: "1000Y", //productPeriod: "1000Y",
        item2: "",
        item3: "",
        item4: ""
      },
      countdown: 60,
      codeText: "验证码"
    };
  },
  methods: {
    //交费方式
    getPayType() {
      let result = "";
      _.forEach(this.item3, val => {
        if (val.isactive) {
          result = val.value;
        }
      });

      return result;
    },
    //获取交费期限
    getTerm() {
      let result = "";
      _.forEach(this.item2, val => {
        if (val.isactive) {
          result = val.value;
        }
      });

      return result;
    },
    settime() {
      if (this.countdown == 0) {
        this.codeText = "验证码";
        this.countdown = 60;
        return;
      } else {
        this.codeText = this.countdown + "s";
        this.countdown--;
      }
      setTimeout(() => {
        this.settime();
      }, 1000);
    },
    getCode() {
      if (!this.part1.phone) {
        $vux.toast.show({
          text: "请输入投保人手机号",
          type: "text"
        });
        return;
      } else {
        if (testPhone(this.part1.phone)) {
          $vux.toast.show({
            text: "手机号格式不正确",
            type: "text"
          });
          return;
        }
      }

      this.settime();
    },
    onSubmit() {
      if (!this.part1.name) {
        $vux.toast.show({
          text: "请输入投保人姓名",
          type: "text"
        });
        return;
      } else {
        if (!patternFn(this.part1.name)) {
          $vux.toast.show({
            text: "请输入真实姓名",
            type: "text"
          });
          return;
        }
      }

      if (!this.part1.number) {
        $vux.toast.show({
          text: "请输投保人身份证号",
          type: "text"
        });
        return;
      } else {
        let number = testNumber(this.part1.number);
        if (number.status != 1) {
          $vux.toast.show({
            text: number.msg,
            type: "text"
          });
          return;
        }
      }

      if (!this.part1.phone) {
        $vux.toast.show({
          text: "请输入投保人手机号",
          type: "text"
        });
        return;
      } else {
        if (testPhone(this.part1.phone)) {
          $vux.toast.show({
            text: "手机号格式不正确",
            type: "text"
          });
          return;
        }
      }

      if (!this.part1.code) {
        $vux.toast.show({
          text: "请输入验证码",
          type: "text"
        });
        return;
      }

      if (!this.part1.email) {
        $vux.toast.show({
          text: "请输入电子邮箱",
          type: "text"
        });
        return;
      } else {
        if (!testEmail(this.part1.email)) {
          $vux.toast.show({
            text: "邮箱格式不正确",
            type: "text"
          });
          return;
        }
      }

      if (!this.part1.address) {
        $vux.toast.show({
          text: "请输入详细地址",
          type: "text"
        });
        return;
      }

      if (!this.part2.name) {
        $vux.toast.show({
          text: "请输入被保人姓名",
          type: "text"
        });
        return;
      }

      if (!this.part2.name) {
        $vux.toast.show({
          text: "请输入被保人姓名",
          type: "text"
        });
        return;
      } else {
        if (!patternFn(this.part2.name)) {
          $vux.toast.show({
            text: "请输入真实姓名",
            type: "text"
          });
          return;
        }
      }

      if (!this.part2.number) {
        $vux.toast.show({
          text: "请输入被保人身份证号",
          type: "text"
        });
        return;
      }

      if (!this.part2.number) {
        $vux.toast.show({
          text: "请输入被保人身份证号",
          type: "text"
        });
        return;
      } else {
        let number = testNumber(this.part2.number);
        if (number.status != 1) {
          $vux.toast.show({
            text: number.msg,
            type: "text"
          });
          return;
        }
      }

      if (!this.part2.person) {
        $vux.toast.show({
          text: "请输入受益人",
          type: "text"
        });
        return;
      }

      if (!this.part2.bank) {
        $vux.toast.show({
          text: "请输入银行卡号",
          type: "text"
        });
        return;
      } else {
        if (!luhnCheck(this.part2.bank)) {
          $vux.toast.show({
            text: "银行卡号格式不正确",
            type: "text"
          });
          //this.part2.bank="";
          return;
        }
      }

      if (!this.agree) {
        $vux.toast.show({
          text: "请选择同意",
          type: "text"
        });
        return;
      }

      //核保
      //orderSave

      // 核保成功跳转支付页面
      //   this.$router.push({
      //   path: "/pay"
      // });

      // orderSave({
      //   param: {
      //     interface: "100132",
      //     system: "S10000051",
      //     mode: "",
      //     sessionId: ""
      //   },
      //   data: {
      //     head: {
      //       platform: "ABX",
      //       timeStamp: "",
      //       extTransactionNo: "",
      //       localTransactionNo: "",
      //       systemId: "S10000051",
      //       MD5: "",
      //       errorCode: "0000",
      //       errorMessage: "成功"
      //     },
      //     body: {
      //       applicant: {
      //         userId: "b2676359bb364e15897e95e28e643946",
      //         idName: "韩艳磊",
      //         idType: "01",
      //         idNo: "342201198303063033",
      //         idExpireDate: "9999-12-31",
      //         mobile: "13811950048",
      //         email: "zhaowei_2013@sina.com",
      //         province: "350000",
      //         city: "350100",
      //         area: "350102",
      //         address: "picc大厦18层"
      //       },
      //       insuredUser: {
      //         userId: "b2676359bb364e15897e95e28e643946",
      //         birthday: "1990-06-15",
      //         sex: "1",
      //         profession: "2022111",
      //         relationType: "0"
      //       },
      //       product: {
      //         productId: "P0000001",
      //         productPlanId: "P0000001_1",
      //         productName: "优爱宝定期寿险",
      //         insuYear: "20Y",
      //         amout: 300000,
      //         premium: 396,
      //         payIntv: "12",
      //         payPeriod: "20Y"
      //       }
      //     }
      //   }
      // });
    },
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
    padding: 30px 0 30px 5px;
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

  footer {
    width: 100%;
    // position: fixed;
    height: 110px;
    // left: 0;
    // bottom: 0;
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
}
</style>
