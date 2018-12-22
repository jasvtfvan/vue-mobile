<template>
  <div class="feature">
    <span class="title">
      <span>国华人寿承保</span>
      <!-- <div class="keep">
        <img src="../../assets/disable.svg" alt>
        <p>已收藏</p>
      </div>-->
      <disabe></disabe>
    </span>
    <ul>
      <li>
        <img src="../../assets/home/point.svg" alt>
        仅90天等待期，保障责任更全
      </li>
      <li>
        <img src="../../assets/home/point.svg" alt> 小投入高杠杆，150万保额免体检
      </li>
    </ul>
  </div>
</template>
<script>
import able from "@/components/common/keep/index";
import disabe from "@/components/common/keep/disable";
import { Flexbox, FlexboxItem } from "vux";
export default {
  props: {},
  data() {
    return {};
  },
  components: {
    able,
    disabe,
     Flexbox,
    FlexboxItem
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.feature {
  background: #ffffff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 40px;
      color: #444444;
      margin-left: 24px;
      font-size: 40px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
      line-height: 56px;
    }
    .keep {
      text-align: center;
      margin-right: 30px;
      img {
        width: 50px;
        height: 50px;
      }
      span {
        color: #666666;
        font-size: 20px;
      }
    }
  }

  ul li {
    color: #666666;
    font-size: 28px;
    margin-left: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 50px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
