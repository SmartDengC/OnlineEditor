<template>
  <div>
    <div class="div1">
      <span>行内元素垂直居中</span>
      <!-- <div>块级元素垂直居中</div> -->
    </div>

    <div class="div2">
      <span>行内元素垂直居中</span>
      <div>块级元素垂直居中</div>
    </div>

    <div class="div3">
      <span>行内元素垂直居中</span>
      <div>块级元素垂直居中</div>
    </div>

    <div class="div4">
      <span>行内元素垂直居中</span>
      <div>块级元素垂直居中</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.div1 {
  border: 1px solid;
  background: lightgreen;
  /* 就是让内容的高等于行高 */
  height: 100px;
  line-height: 100px;
}

.div2 {
  border: 1px solid;
  height: 100px;
  background: lightblue;
  display: flex;
  /* 垂直居中 align-items， 水平居中justify-content */
  align-items: center;
}
.div3 {
  border: 1px solid;
  height: 100px;
  background: lightgreen;
  display: grid;
  /* grid布局的时候 垂直 align-content， 水平 justify-content */
  align-content: center;
}
.div4 {
  border: 1px solid;
  height: 100px;
  background: lightblue;
  display: table-cell;
  vertical-align: middle;
}
</style>
