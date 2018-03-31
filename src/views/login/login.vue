<template>
    <div class="box">
        <group title="登录" label-width="4em" label-margin-right="2em" label-align="justify">
          <x-input title="账号" placeholder="必填" v-model="username"></x-input>
          <x-input title="密码" type="password" placeholder="必填" v-model="password"></x-input>
        </group>
        <div class="bt-wp">
          <x-button type="primary" class="button">登录</x-button>
        </div>
        <br>
        <h3>http://192.168.0.114:8080/#/</h3>
    </div>
</template>
<script>
import '@/styles/modules/login.less';
import {Group, XInput, XButton, Box} from 'vux';
export default {
  components:{
    Group,
    XInput,
    XButton,
    Box
  },
  data() {
    return {
      "username": "",
      "password": "",
    }
  },
  methods: {
  }
}
</script>
