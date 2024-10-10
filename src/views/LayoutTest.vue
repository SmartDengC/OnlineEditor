<template>
  <div class="container">
    <div class="item"><p>1</p></div>
    <div class="item"><p>2</p></div>
    <div class="item"><p>3</p></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}

.item {
  border: 1px solid;
}
</style>
