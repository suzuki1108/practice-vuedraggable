<template>
  <header>
    <div>
      <h2>Kanban-app</h2>
    </div>
    <div class="item">
      <p>Item1</p>
      <p>Item2</p>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkseagreen;
  h2 {
    margin-left: 20px;
  }
  .item {
    display: flex;
    p {
      display: block;
      margin-right: 20px;
    }
  }
}
</style>
