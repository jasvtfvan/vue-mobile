<template>
<div class="login">
  <!-- 内容开始 -->
  <article class="bind">
    <section class="bind-con">
      <ul>
        <li class="vm-1px-b"> <i class="username-ico"></i>
          <input name="username" type="text" class="input-name" placeholder="请输入姓名" v-model="username" />
        </li>
        <li class="vm-1px-b"> <i class="password-ico"></i>
          <input name="password" type="password" class="input-password" placeholder="请输入密码" v-model="password" />
        </li>
      </ul>
      <div class="butn"><a href="javascript:;" class="btnType1" @click="login">登录</a></div>
    </section>
  </article>
  <!-- 内容结束 -->
</div>
</template>
<script>
import {mapActions} from 'vuex';
import {LOGIN} from '@/constants/apiTypes';

import schema  from 'async-validator';
import sanitize from 'validator';
const descriptor = {
  username: [
    {type: "string", required: true, message: '账号为必填项'},
    {min: 3, max: 20, message: '账号长度在3~20之间'},
    {
      pattern: /^[a-z0-9]+$/, 
      transform(value) {
        return sanitize.trim(value);
      },
      message: '账号只能由小写英文字母或数字组成'
    }
  ],
  password: [
    {type: "string", required: true, message: '密码为必填项'},
    {min: 3, max: 20, message: '密码长度在3~20之间'},
    {
      validator(rule, value, callback, source, options) {
        if(!/^[a-z0-9]+$/.test(value)) {
          callback(rule.message);
        }
        callback();
      },
      message: '密码不符合规则'
    }
  ],
};
const validator = new schema(descriptor);

export default {
  components:{
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    ...mapActions([LOGIN]),
    login() {
      const _this = this;
      validator.validate({
        username: _this.username,
        password: _this.password
      }, (errors, fields) => {
        if(errors) {
          _this.$vux.toast.show({
            text: errors[0]['message'] || '表单输入有误',
            type: 'text'
          });
          return;
        }
        _this[LOGIN]({
          username: _this.username, 
          password: _this.password
        }).then((res) => {
          console.log('login:::res:::', res);
          if (res.success) {
            _this.$vux.toast.show({
              text: '登录成功',
              type: 'success'
            });
            _this.$router.push({path: 'home'});
          }
        }).catch(error => {
          console.log('login.vue:::error:::', error);
        });
      });
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/styles/modules/login.less';
</style>
