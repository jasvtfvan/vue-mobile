<template>
  <div class="pay">
    <vm-header :headerText="headerText"></vm-header>
    <flexbox>
      <flexbox-item :span="12" class="row">
        <div class="titile">国民超级年金险</div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item :span="12" class="row">
        <ul class="ul">
          <li>
            <span>保障期限</span>
            <span>终生</span>
          </li>
          <li>
            <span>交费年限</span>
            <span>20年</span>
          </li>
          <li>
            <span>交费期限</span>
            <span>月交</span>
          </li>
          <li style="padding-bottom: 30px">
            <span>保费</span>
            <span style="color:#F85C58">500/元</span>
          </li>
        </ul>
      </flexbox-item>
    </flexbox>

    <flexbox>
      <flexbox-item :span="12" class="row">
        <div class="titile2">
          <span>支付&续期账户</span>
          <span>查看支付限额</span>
        </div>
        <div class="titile2-tip">
          请你使用
          <span style="color:#4D8EFA">投保人</span>
          的银行卡，本次及以后的保费将从该银行卡扣除
        </div>
      </flexbox-item>
    </flexbox>

    <flexbox>
      <flexbox-item :span="12" class="row">
        <ul>
          <li>
            <flexbox>
              <flexbox-item :span="3">持卡人</flexbox-item>
              <flexbox-item :span="9">
                <x-input placeholder="持卡人"></x-input>
              </flexbox-item>
            </flexbox>
          </li>
          <li>
            <flexbox>
              <flexbox-item :span="3">开户行</flexbox-item>
              <flexbox-item :span="9">
                <x-input placeholder="持卡人"></x-input>
              </flexbox-item>
            </flexbox>
          </li>
          <li>
            <flexbox>
              <flexbox-item :span="3">银行卡号</flexbox-item>
              <flexbox-item :span="9">
                <x-input placeholder="持卡人"></x-input>
              </flexbox-item>
            </flexbox>
          </li>
        </ul>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <!-- <vm-footer></vm-footer> -->
        <div class="pay-footer" @click="onSubmit">确认支付</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import vmHeader from "@/components/common/vmHeader";
import vmFooter from "./footer";
import { Flexbox, FlexboxItem, XInput } from "vux";
import { getBankList } from "@/apis/modules/home";
export default {
  mounted() {
    // getBankList({
    //   param: {
    //     interface: "100159",
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
    //       productId: "P0000016"
    //     }
    //   }
    // });
  },
  data: function() {
    return {
      headerText: "支付信息"
    };
  },
  components: {
    vmHeader,
    Flexbox,
    FlexboxItem,
    XInput,
    vmFooter
  },
  methods: {
    onSubmit() {
      // 确认支付接口 (100149)国华支付出单
      // 成功之后跳转
      //   this.$router.push({
      //   path: "/result"
      // });
    }
  }
};
</script>

<style lang="less" scoped>
.pay {
  .titile {
    font-size: 40px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 56px;
  }

  .row {
    padding: 30px 30px 0 30px;
  }

  .ul li {
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    background: #fff9f1;

    span:nth-of-type(1) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(136, 136, 136, 1);
      line-height: 40px;
    }

    span:nth-of-type(2) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 40px;
    }
  }

  .titile2 {
    display: flex;
    justify-content: space-between;
    span:nth-of-type(1) {
      font-size: 40px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 56px;
    }

    span:nth-of-type(2) {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(77, 142, 250, 1);
      line-height: 50px;
    }
  }

  .titile2-tip {
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    line-height: 40px;
    padding: 7px 0 0 0;
  }

  .pay-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 110px;
    background: linear-gradient(
      90deg,
      rgba(255, 185, 0, 0.9) 0%,
      rgba(254, 131, 0, 0.8) 100%
    );
    color: #ffffff;
    font-size: 36px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
