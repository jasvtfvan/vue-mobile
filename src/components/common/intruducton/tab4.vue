<template>
  <div class="tab3">
    <ul>
      <li>常见问题</li>
      <li>
        <flexbox>
          <flexbox-item :span="2">
            <div class="img">
              <img src="../../../assets/tab3/step1.png" alt>
            </div>
          </flexbox-item>
          <flexbox-item :span="10">
            <p>这款年金险的年金是如何领取的？</p>
          </flexbox-item>
        </flexbox>
      </li>
      <li>
        <flexbox>
          <flexbox-item :span="2"></flexbox-item>
          <flexbox-item :span="10">
            <p>国民超级年金险，按期交费满5个保单年度后，若持续每年交费即可领取，您选择年交就会按年领取，选择月交就会按月领取，领取比例每期保费的35%-62%，一直领取至终身。领取的年金默认进入产品自带的累积生息账户，二次增值。您也可以随时领取账户里的钱。</p>
          </flexbox-item>
        </flexbox>
      </li>
      <li>
        <flexbox>
          <flexbox-item :span="2">
            <div class="img">
              <img src="../../../assets/tab3/step3.png" alt>
            </div>
          </flexbox-item>
          <flexbox-item :span="10">
            <p>之前做过手术、住院或者有过既往病史，能否购买这个产品？</p>
          </flexbox-item>
        </flexbox>
      </li>
      <li>
        <flexbox>
          <flexbox-item :span="2"></flexbox-item>
          <flexbox-item :span="10">
            <p>本产品是不需要体检，也免健康告知的，对被保人的身体状况没有限制。</p>
          </flexbox-item>
        </flexbox>
      </li>

      <li>查看更多问题</li>
    </ul>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
  components: {
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
.tab3 {
   margin: 50px 0 999px 0;
  ul li {
    &:nth-of-type(1) {
      font-size: 44px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 50px 10px 50px;
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      .img {
        text-align: center;
        img {
          width: 37px;
          height: 37px;
        }
      }

      p {
        font-size: 30px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 44px;
      }
    }

    &:nth-of-type(3),
    &:nth-of-type(5) {
      p {
        font-size: 28px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 48px;
      }
    }
    &:nth-of-type(6) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(245, 245, 245, 1);
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(77, 142, 250, 1);
      line-height: 28px;
      padding: 25px 0;
    }
  }
}
</style>
