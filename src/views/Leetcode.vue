<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">
      <div class="up">up</div>
      <div class="down">down</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
}
</style>
