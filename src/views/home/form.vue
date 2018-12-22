<template>
  <div class="form">
    <vm-header></vm-header>
    <div class="title">投保人信息</div>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">姓名</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请输入姓名"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">身份证号</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请输身份证号"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">手机号</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请输手机号"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">验证码</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请输验证码"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">电子邮箱</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请电子邮箱"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">详细地址</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="详细地址"></x-input>
      </flexbox-item>
    </flexbox>
    <div class="title">被保人信息</div>
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
        <div class="item-left">姓名</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="请输入姓名"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">身份证号</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="身份证号"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">受益人</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="受益人"></x-input>
      </flexbox-item>
    </flexbox>
    <!-- <div class="title">缴费账户</div>
    <div class="tip">请你使用投保人的银行卡，第2年及以后的保费将从该银行卡扣除</div>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">持卡人</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="持卡人"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">续期银行</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="续期银行"></x-input>
      </flexbox-item>
    </flexbox> -->
    <flexbox class="flex=box" style="margin-bottom: 10px">
      <flexbox-item :span="4">
        <div class="item-left">银行卡号</div>
      </flexbox-item>
      <flexbox-item :span="8">
        <x-input placeholder="银行卡号"></x-input>
      </flexbox-item>
    </flexbox>
    <div class="title">保障计划</div>

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
      <flexbox-item :span="1"></flexbox-item>

      <flexbox-item :span="11">
        <p
          style="color:#666666;font-size:14px;margin-right:10px"
        >我已阅读并同意《保险条款》《投保须知》《人身保险投保提示书》和《平台服务协议》</p>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import vmHeader from "@/components/common/vmHeader";
import { Flexbox, FlexboxItem, Datetime, XNumber, XInput } from "vux";
import _ from "lodash";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Datetime,
    XNumber,
    vmHeader,
    XInput
  },
  props: {},
  data() {
    return {
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

  .tip {
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    padding: 0 21px 24px 30px;
  }
}
</style>
