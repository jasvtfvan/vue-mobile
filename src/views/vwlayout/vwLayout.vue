<template>
  <div vw-layout>
    <banner />
    <grid />
    <block />
    <list />
  </div>
</template>

<script>
import banner from '@/views/vwlayout/banner';
import grid from '@/views/vwlayout/grid';
import block from '@/views/vwlayout/block';
import list from '@/views/vwlayout/list';

export default {
  name: 'App',
  components: {
    banner,
    grid,
    block,
    list
  }
};
</script>

<style lang="less" scoped>
[vw-layout]{
  background-color: #f4f4f4;
}
/deep/ img {
  width: 100%;
  height: auto;
  vertical-align: top;
}
/deep/ [aspectratio] {
  position: relative;
}
/deep/ [aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}
/deep/ [aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
/deep/ [flexContainer] {
  display: flex;
  width: 750px;
}
/deep/ .block {
  margin-top: 15px;
}
/deep/ ul,li {
  list-style: none outside none;
  margin: 0;
  padding: 0;
}
/deep/ figure {
  display: block;
  margin: 0;
}
</style>
