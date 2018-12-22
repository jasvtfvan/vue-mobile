<template>
  <div class="panel">
    <div class="title">保费试算</div>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">为谁投保</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <span
          v-for="(item,index) in item"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">出生日期</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <datetime
          title
          v-model="datevalue"
          :placeholder="time1"
          value-text-align="left"
          class="item-datetime"
          :default-selected-value="defaultDate"
          @on-change="getAge(datevalue)"
          @on-show="showdate"
        ></datetime>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">保障期限</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <div class="item-left">终身</div>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">缴费期限</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <span
          v-for="(item,index) in item2"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item2',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">缴费方式</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <span
          v-for="(item,index) in item3"
          :key="index"
          :class="item.isactive?'group-btn-active':'group-btn'"
          @click="modifyButtonStatus('item3',index)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="3">
        <div class="item-left">购买份数</div>
      </flexbox-item>
      <flexbox-item :span="5">
        <x-number v-model="count"></x-number>
      </flexbox-item>
      <flexbox-item :span="3">{{isMonthorYear =="P0000016_1"?500:1000}}元/份</flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px" v-show="datevalue">
      <flexbox-item :span="3">
        <div class="item-left">领取年金</div>
      </flexbox-item>
      <flexbox-item :span="9">
        <div class="item-left">
          <span style="color:#F85C58">599.37元/月</span>至终身
        </div>
      </flexbox-item>
    </flexbox>

    <flexbox class="flex=box" style="margin-bottom: 10px" v-show="datevalue">
      <flexbox-item :span="12">
        <ul class="ul-description">
          <li>您将获得的保障利益是：</li>
          <li>1.每年交1000元，交费满5年后开始领取，每年领取599.37元至终身，若不领取则自动进入累计生息账户；</li>
          <li>2.保障期限内，若被保险人不幸身故，将返还现金价值与已交保险费的较大者给法定受益人。</li>
        </ul>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Datetime, XNumber } from "vux";
import _ from "lodash";
import { getAges } from "@/utils/utils";
import {
  calculation,
  getDetailByProductId,
  favorSave,
  favorDelete,
  getPhoneCode,
  getUserList,
  orderSave,
  getBankList
} from "@/apis/modules/home";
import { throws } from "assert";
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
      time1: "请选择被保人年龄(18周岁-55周岁)",
      item: [
        { key: "本人", value: "0", isactive: true },
        { key: "未成年子女", value: "1", isactive: false }
      ],
      item2: [
        { key: "10年", value: "10Y", isactive: true },
        { key: "15年", value: "15Y", isactive: false },
        { key: "20年", value: "20Y", isactive: false }
      ],
      item3: [
        { key: "月缴", value: "P0000016_1", isactive: true },
        { key: "年缴", value: "P0000016_2", isactive: false }
      ],
      defaultDate: "1988-01-01",
      datevalue: "", //出身日期选中值
      age: 0,
      count: 1, //购买份数  月交 500/月  年缴  1000/年
      isMonthorYear: "P0000016_1" //默认月交
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showdate() {
      //保费计算
      calculation({
        param: {
          interface: "100146",
          system: "S10000051",
          mode: "",
          sessionId: ""
        },
        data: {
          head: {},
          body: {
            productPlanId: "P0000016_1", //缴费方式
            sex: "0", //性别
            age: 17, //年龄
            productPeriod: "1000Y", //保障期限
            paymentPeriod: "10Y", //缴费期限
            profession: "ALL",
            amount: 1000, //保额  月交 100 年 1000
            socialSecurity: "-1"
          }
        }
      });
    },
    getAge(val) {
      // console.log(val);
      // console.log(getAges(val));
      this.age = getAges(val);

      console.log(this.age);

      //本产品投保年龄：28天-55周岁（10年交），28天-50周岁（15年交），28天-45周岁（20年交）；

      // if (1 < this.age < 55 || (this.age < 1 && this.age * 365 > 28)) {
      //   this.updatetype("10");
      // }

      // if (1 < this.age < 50 || (this.age < 1 && this.age * 365 > 28)) {
      //   this.updatetype("15");
      // }

      // if (1 < this.age < 45 || (this.age < 1 && this.age * 365 > 28)) {
      //   this.updatetype("20");
      // }
    },

    //跟新缴费年限
    updatetype(val) {
      console.log("updatetype");
      console.log(val);
      _.forEach(this.item2, (value, index) => {
        if (value.key === "10年") {
          value.isactive = true;
        }
        if (value.key === "15年") {
          value.isactive = true;
        }
        if (value.key === "20年") {
          value.isactive = true;
        }
      });
    },
    modifyButtonStatus(val, item) {
      if (val === "item") {
        _.forEach(this.item, (value, key) => {
          if (item === key) {
            value.isactive = true;
          } else {
            value.isactive = false;
          }

          if (value.isactive && value.value === "0") {
            this.datevalue = "";
            this.defaultDate = "1988-01-01";
            this.time1 = "请选择被保人年龄(18周岁-55周岁）";
          }

          if (value.isactive && value.value === "1") {
            this.datevalue = "";
            this.defaultDate = "2013-01-01";
            this.time1 = "请选择被保人年龄(28天-17周岁";
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

      //缴费方式
      if (val === "item3") {
        _.forEach(this.item3, (value, key) => {
          if (item === key) {
            value.isactive = true;
            this.isMonthorYear = value.value;
          } else {
            value.isactive = false;
            this.isMonthorYear = value.value;
          }
        });
      }
    }
  },
  mounted() {
    // getDetailByProductId({
    //   param: {
    //     interface: "100142",
    //     system: "S10000051",
    //     mode: "",
    //     sessionId: ""
    //   },
    //   data: {
    //     head: {
    //       timeStamp: "",
    //       systemId: "",
    //       MD5: "",
    //       extTransactionNo: "",
    //       localTransactionNo: "",
    //       errorCode: "",
    //       errorMessage: ""
    //     },
    //     body: {
    //       userId: "1ed1a2ed5a9d36391c7cc2998bca3f28",
    //       productPlanId: "yxzhywx_1",
    //       recommendId: "1",
    //       productId:"P0000016"
    //     }
    //   }
    // });
    // favorSave({
    //   param: {
    //     interface: "100120",
    //     system: "S10000051",
    //     mode: "",
    //     sessionId: ""
    //   },
    //   data: {
    //     head: {
    //       timeStamp: "",
    //       systemId: "",
    //       MD5: "",
    //       extTransactionNo: "",
    //       localTransactionNo: "",
    //       errorCode: "",
    //       errorMessage: ""
    //     },
    //     body: {
    //       userId: "1",
    //       favorType: "1",
    //       favorName: "2",
    //       favorUrl: "1",
    //       favorIcon: "1",
    //       memo: "",
    //       favorItemId: "P0000016"
    //     }
    //   }
    // });
    // favorDelete({
    //   param: {
    //     interface: "100120",
    //     system: "S10000051",
    //     mode: "",
    //     sessionId: ""
    //   },
    //   data: {
    //     head: {
    //       timeStamp: "",
    //       systemId: "",
    //       MD5: "",
    //       extTransactionNo: "",
    //       localTransactionNo: "",
    //       errorCode: "",
    //       errorMessage: ""
    //     },
    //     body: {
    //       userId: "1",
    //       favorId: [1, 2],
    //       favorItemId:"P0000016",
    //       favorType:"",
    //       favorName:""
    //     }
    //   }
    // });
    // getPhoneCode({
    //   param: {
    //     interface: "100331",
    //     system: "S10000051",
    //     mode: "",
    //     sessionId: ""
    //   },
    //   data: {
    //     head: {
    //       timeStamp: "",
    //       systemId: "",
    //       MD5: "",
    //       extTransactionNo: "",
    //       localTransactionNo: "",
    //       errorCode: "",
    //       errorMessage: ""
    //     },
    //     body: {
    //       userId: "1",
    //       systemId: "S10000058",
    //       phoneNumber: "18911148661",
    //       templateCode: "SMS_140105106",
    //       codeLength: "4"
    //     }
    //   }
    // });
    // getUserList({
    //   param: {
    //     interface: "100112",
    //     system: "S10000051",
    //     mode: "",
    //     sessionId: ""
    //   },
    //   data: {
    //     head: {
    //       timeStamp: "",
    //       systemId: "",
    //       MD5: "",
    //       extTransactionNo: "",
    //       localTransactionNo: "",
    //       errorCode: "",
    //       errorMessage: ""
    //     },
    //     body: {
    //       userId: "1"
    //     }
    //   }
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
    //getBankList
    getBankList({
      param: {
        interface: "100159",
        system: "S10000051",
        mode: "",
        sessionId: ""
      },
      data: {
        head: {
          timeStamp: "",
          systemId: "",
          MD5: "",
          extTransactionNo: "",
          localTransactionNo: "",
          errorCode: "",
          errorMessage: ""
        },
        body: {
          productId: "P0000016"
        }
      }
    });
  }
};
</script>
<style lang="less" scoped>
.panel {
  z-index: 99999;
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

  .ul-description li {
    padding: 5px 25px 5px 25px;
    color: #666666;
    font-size: 24px;
  }

  .ul-description li:nth-of-type(1) {
    color: #444444;
    font-size: 28px;
  }
}
</style>
