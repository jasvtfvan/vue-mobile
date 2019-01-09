<template>
  <div class="intruducton">
    <!-- <vmmenu id="navigation"></vmmenu> -->
    <div class="menu" id="menu">
      <flexbox>
        <flexbox-item :span="3" v-for="(item,index) in list" :key="index">
          <span :class="item.isactive?'active-item':''" @click="activeItem(list,item.key)">
            <a :href="'#'+index">{{item.key}}</a>
          </span>
        </flexbox-item>
      </flexbox>
    </div>

    <tab1 id="0"></tab1>
    <tab2 id="1"></tab2>
    <tab3 id="2"></tab3>
    <tab4 id="3"></tab4>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from "vux";
import _ from "lodash";
import tab1 from "./tab1.vue";
import tab2 from "./tab2.vue";
import tab3 from "./tab3.vue";
import tab4 from "./tab4.vue";
import vmmenu from "./vmmenu.vue";

export default {
  components: { tab1, tab2, tab3, tab4, vmmenu, Flexbox, FlexboxItem },
  props: {},
  data() {
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
    goBack() {
      this.$router.go(-1);
    },
    activeItem(data, index) {
      _.forEach(data, item => {
        if (index === item.key) {
          item.isactive = true;
        } else {
          item.isactive = false;
        }
      });

      //window.document.scrollTo( 50, 100 );
    }
  },
  mounted: function() {
  
  }
};
</script>
<style lang="less" scoped>
.menu {
   margin: 45px 45px 45px 45px;
  a {
   
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 40px;
  }

  .active-item a {
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
