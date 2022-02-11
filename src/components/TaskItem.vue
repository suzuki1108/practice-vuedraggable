<template>
  <div class="task-item">
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
.task-item {
  width: 280px;
  height: 40px;
  margin: 10px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
