<template>
  <div class="body">
    <div class="menu">
      <h3>
        {{
          taskType === "completes"
            ? "完了"
            : taskType === "workings"
            ? "進行中"
            : "未着手"
        }}
      </h3>
      <p @click="modalToggle">追加</p>
    </div>

    <teleport to="body">
      <div v-if="state.modalOpen" class="modal">
        <div class="form">
          <p @click="modalToggle">✖️</p>
          <h2>タスクを入力してください</h2>
          <div>
            <input v-model="state.newTask" />
            <button @click="addTask">送信</button>
          </div>
        </div>
      </div>
    </teleport>

    <div class="task-box">
      <draggable :list="props.item" group="tasks" itemKey="title">
        <template #item="{ element }">
          <TaskItem :title="element.title" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject, PropType, reactive } from "vue";
import TaskItem from "@/components/TaskItem.vue";
import { Task, Tasks } from "@/types/Task";
import { TaskType } from "@/types/TaskType";
import draggable from "vuedraggable";

const item = inject<Tasks>("tasks");

const props = defineProps({
  taskType: String as PropType<TaskType>,
  item: Array as PropType<Task[]>,
});

const state = reactive({
  modalOpen: false,
  newTask: "",
});

const modalToggle = () => {
  state.modalOpen = !state.modalOpen;
};

const addTask = () => {
  switch (props.taskType) {
    case "completes":
      item?.completes.push({ title: state.newTask });
      break;
    case "waitings":
      item?.waitings.push({ title: state.newTask });
      break;
    case "workings":
      item?.workings.push({ title: state.newTask });
  }
};
</script>

<style scoped lang="scss">
.body {
  margin-top: 10px;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: block;
    padding: 2px 15px;
    border-radius: 10px;
    background-color: lightgray;
  }
}
.task-box {
  width: 300px;
  height: 400px;
  border: 2px;
  border-radius: 10px;
  border-style: solid;
  border-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
}
.task-box::-webkit-scrollbar {
  display: none;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    width: 40%;
    height: 50%;
    border-radius: 10px;
    padding: 5px;
  }
}
</style>
