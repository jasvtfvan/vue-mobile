<template>
  <div class="range">
    <div class="title">保障范围</div>
    <ul>
      <li>
        <div>
          <div>
            <span>终身领取</span>
            <span @click="showContent">最高可达月/年交保费的61%</span>
            <img
              @click="showContent"
              src="../../assets/arrow/left.svg"
              alt
              v-show="!showContent004"
            >
            <img @click="showContent" src="../../assets/arrow/down.svg" alt v-show="showContent004">
          </div>
          <p
            class="slide"
            :class="showContent004?'animate':''"
          >合同承诺固定领取，每月按期交费，满5年后每月领取月交保费的36%-62%。
            <br>合同承诺固定领取，每年按期交费， 满5年后每年领取年交保费的35%- 61%。
          </p>
        </div>
      </li>

      <li>
        <div>
          <div>
            <span>身故保障金</span>
            <span @click="showContent005=!showContent005">至少返还全部已交保费</span>
            <img
              @click="showContent005=!showContent005"
              src="../../assets/arrow/left.svg"
              alt
              v-show="!showContent005"
            >
            <img
              @click="showContent005=!showContent005"
              src="../../assets/arrow/down.svg"
              alt
              v-show="showContent005"
            >
          </div>
          <p
            class="slide"
            :class="showContent005?'animate':''"
          >
         若被保险人身故，我们按被保险人身故时本合同现金价值与本合同累计已交保险费的较大者给付身故保险金，本合同终止。
          </p>
        </div>
      </li>
      <li>
        <!-- <li>
        <span>终身领取</span>
        <span>最高可达月/年交保费的61%</span>
      </li>
      <li>
        <span>身故保障金</span>
        <span>至少返还全部已交保费</span>
        </li>-->
      </li>
    </ul>
    <div class="view">
      <a href="#">查看详情 ></a>
    </div>
  </div>
</template>
<script>
import {
  Cell,
  CellBox,
  CellFormPreview,
  Group,
  Badge,
  Flexbox,
  FlexboxItem
} from "vux";
export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    Flexbox,
    FlexboxItem
  },
  props: {},
  data() {
    return {
      showContent004: false,
      showContent005: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showContent() {
      this.showContent004 = !this.showContent004;
    }
  }
};
</script>
<style lang="less" scoped>
.range {
  .title {
    padding: 0 0 24px 24px;
    font-size: 40px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(68, 68, 68, 1);
    line-height: 56px;
  }
  .view a {
    padding: 0 0 0 24px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(75, 141, 250, 1);
    line-height: 40px;
  }

  ul > li > div > div {
    display: flex;
    justify-content: space-between;
    padding: 0 24px 24px 24px;
    span {
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      line-height: 40px;
    }

    span:nth-of-type(1) {
      color: rgba(136, 136, 136, 1);
    }

    span:nth-of-type(2) {
      color: rgba(68, 68, 68, 1);
      position: relative !important;
      right: -99px !important;
    }

    .group {
      width: 100%;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 25px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;

    //


    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(136, 136, 136, 1);
    line-height: 40px;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
}
</style>
