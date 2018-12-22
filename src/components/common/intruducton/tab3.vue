<template>
  <div class="tab3">
    <ul>
      <li>理赔指引</li>
      <li>
        <flexbox>
          <flexbox-item :span="2">
            <div class="img">
              <img src="../../../assets/tab3/step1.png" alt>
            </div>
          </flexbox-item>
          <flexbox-item :span="10">
            <p>第1步：理赔申请</p>
            <p>致电保险公司客服400-69-12345申请理赔</p>
          </flexbox-item>
        </flexbox>
      </li>
      <li>
        <flexbox>
          <flexbox-item :span="2">
            <div class="img">
              <img src="../../../assets/tab3/step2.png" alt>
            </div>
          </flexbox-item>
          <flexbox-item :span="10">
            <p>第2步：提交材料</p>
            <p>按保险条款约定准备相应理赔资料</p>
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
            <p>第3步：理赔审核</p>
            <p>保险公司进行理赔资料审核</p>
          </flexbox-item>
        </flexbox>
      </li>
      <li>
        <flexbox>
          <flexbox-item :span="2">
            <div class="img">
              <img src="../../../assets/tab3/step4.png" alt>
            </div>
          </flexbox-item>
          <flexbox-item :span="10">
            <p>第4步：获得赔款</p>
            <p>保险公司支付客户理赔款</p>
          </flexbox-item>
        </flexbox>
      </li>

      <li>查看理赔须知</li>
    </ul>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Datetime, XNumber } from "vux";
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
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5) {
      .img {
        text-align: right;
        img {
          width: 37px;
          height: 37px;
        }
      }

      p {
        padding: 20px;
      }
      p:nth-of-type(1) {
        font-size: 28px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(77, 142, 250, 1);
        line-height: 28px;
      }
      p:nth-of-type(2) {
        font-size: 28px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);
        line-height: 26px;
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
