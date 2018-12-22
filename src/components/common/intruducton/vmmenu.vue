<template>
  <div class="menu">
    <flexbox>
      <flexbox-item :span="3" v-for="(item,index) in list" :key="index">
        <span
          :class="item.isactive?'active-item':''"
          @click="activeItem(list,item.key)"
        >{{item.key}}</span>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from "vux";
import _ from "lodash";
import { scrollAnimation } from "@/utils/utils";
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data: function() {
    return {
      list: [
        { key: "产品介绍", value: 1, isactive: true },
        { key: "购买须知", value: 2, isactive: false },
        { key: "理赔说明", value: 3, isactive: false },
        { key: "常见问题", value: 4, isactive: false }
      ]
    };
  },
  methods: {
    activeItem(data, index) {
      _.forEach(data, item => {
        if (index === item.key) {
          item.isactive = true;
        } else {
          item.isactive = false;
        }
      });

      //document.body.scrollTop = document.documentElement.scrollTop = 0;
      // scrollTo(0,0);

      // console.log("//////////////////////////////");

      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrollAnimation(currentY, 70);
    }
  }
};
</script>

<style lang="less" scoped>
.menu {
  margin: 45px 45px 45px 45px;
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 40px;

  .active-item {
    width: 190px;
    height: 65px;
    background: linear-gradient(
      90deg,
      rgba(121, 189, 253, 1) 0%,
      rgba(109, 163, 251, 1) 100%
    );
    border-radius: 54px;
    color: #ffffff;
    padding: 14px 25px 14px 25px;
  }
}
</style>
