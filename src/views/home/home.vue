<template>
  <div home-container>
    <img src="@/assets/logo.png">
    <p>欢迎来到vue脚手架</p>
    <p>
      <a href="javascript:;">跳转至home页面</a>
      <a href="javascript:;">跳转至设置页面</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    console.log(this.$store.state);
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
[home-container] {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  p {
    padding: 20px;
  }
}
</style>
