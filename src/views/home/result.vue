<template>
  <div class="health">
    <vm-header></vm-header>
    <flexbox>
      <flexbox-item :span="12">
        <div class="flex-item1">
          <div class="flex-demo success-icon result"></div>
          <div class="flex-demo right result" @click="showpopup(show1)">
            <p class="sucess-text">已投保成功</p>
            <p class="sucess-price">共支付110元</p>
          </div>
        </div>
      </flexbox-item>
    </flexbox>

    <flexbox>
      <flexbox-item :span="12">
        <div class="flex-demo left">
          <div class="result-tip">您可以在微信公众号“小爱保”的个人中心-我的保单中查询状态</div>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item :span="12">
        <div class="flex-demo result-list">
          <ul>
            <li>保单号：PLAY20184406000A01723</li>
            <li>被保人：黄小小</li>
            <li>被保人：黄小小</li>
            <li>生效时间：2018-12-14 00:00</li>
          </ul>
          <flexbox>
            <flexbox-item :span="6">
              <div class="result-btn">
                <span class="result-btn-left">返回首页</span>
              </div>
            </flexbox-item>
            <flexbox-item :span="6">
              <div class="result-btn">
                <span class="result-btn-right">查看详情</span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import vmHeader from "@/components/common/vmHeader";
import healthBtn from "@/components/common/button/health";
import { Flexbox, FlexboxItem } from "vux";
export default {
  components: {
    vmHeader,
    Flexbox,
    FlexboxItem
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.health {
  .success-icon {
    width: 190px;
    height: 130px;
    background-image: url("../../assets/success.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  .flex-demo {
    margin: 0 70px 0 70ox;
  }

  .result {
    display: inline-block;

    .sucess-text {
      font-size: 48px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(63, 166, 65, 1);
      line-height: 50px;
    }

    .success-price {
      font-size: 40px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 38px;
    }
  }

  .flex-item1,
  .result-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .result-tip {
    color: #666666;
    font-size: 14px;
    padding: 40px 70px 0 70px;
  }

  .result-btn {
    margin-top: 30px;
  }

  .result-btn-left {
    background: rgba(255, 255, 255, 1);
    border-radius: 44px;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 45px;
    padding: 20px 70px 20px 70px;
  }

  .result-btn-right {
    background: linear-gradient(
      90deg,
      rgba(122, 189, 253, 1) 0%,
      rgba(109, 163, 251, 1) 100%
    );
    border-radius: 44px;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #ffffff;
    line-height: 45px;
    padding: 20px 70px 20px 70px;
  }

  .result-list {
    background: #f9f9f9;
    padding: 50px 50px 50px 70px
  }
}
</style>
