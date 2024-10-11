<template>
  <div>
    <div class="div1">
      <span>行内元素水平居中</span>
      <span>行内元素水平居中</span>
      <span>行内元素水平居中</span>
      <span>行内元素水平居中</span>
    </div>
    <div class="div2">
      <span>行内元素水平居中</span>
      <div>块级元素水平居中</div>
      <div>块级元素水平居中</div>
    </div>
    <div class="div3">
      <span>行内元素水平居中</span>
      <div>块级元素水平居中</div>
      <div>块级元素水平居中</div>
    </div>
    <div class="div4">块级元素水平居中</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.div1 {
  text-align: center;
  border: 1px solid;
}

.div2 {
  display: flex;
  justify-content: center;
  border: 1px solid;
}
.div3 {
  display: grid;
  justify-content: center;
  border: 1px solid;
}
.div4 {
  width: 130px;
  margin: 0 auto;
  border: 1px solid;
}
</style>
