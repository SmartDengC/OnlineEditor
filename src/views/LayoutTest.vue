<template>
  <div class="container clearfix">
    <div class="left">定宽</div>
    <div class="right">自适应</div>
  </div>
</template>

<style scoped>
.container {
  height: 400px;
  background-color: #eebefa;
}
.left {
  height: 400px;
  width: 200px;
  background-color: #f783ac;
  font-size: 70px;
  line-height: 400px;
  text-align: center;
  float: left;
}
.right {
  height: 400px;
  background-color: #c0eb75;
  font-size: 70px;
  line-height: 400px;
  float: right;
  width: calc(100% - 200px);
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
