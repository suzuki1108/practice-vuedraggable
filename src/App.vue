<template>
  <HeaderComponent />
  <BaseLayout>
    <h2>タスク管理</h2>
    <BaseTaskLayout>
      <TaskBox task-type="waitings" :item="tasks.waitings" />
      <TaskBox task-type="workings" :item="tasks.workings" />
      <TaskBox task-type="completes" :item="tasks.completes" />
    </BaseTaskLayout>
  </BaseLayout>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import BaseTaskLayout from "@/components/BaseTaskLayout.vue";
import TaskBox from "@/components/TaskBox.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import { provide, reactive } from "vue";
import { Tasks } from "@/types/Task";

const tasks = reactive<Tasks>({
  waitings: [{ title: "waitings 1" }, { title: "waitings 2" }],
  workings: [{ title: "workings 1" }, { title: "workings 2" }],
  completes: [{ title: "completes 1" }, { title: "completes 2" }],
});

provide<Tasks>("tasks", tasks);
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>
