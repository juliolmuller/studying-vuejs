<template>
  <div class="todo-card" :class="completion" @click="$emit('toggle')">
    <span class="todo-delete" title="Excluir" @click.stop="$emit('delete')">
      &times;
    </span>
    <span class="todo-card-text">
      {{ todo.task }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {

  emits: ['toggle', 'delete'],

  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  setup: (props) => ({
    completion: computed(() => (
      props.todo.completed ? 'completed' : 'pending'
    )),
  }),
}
</script>

<style scoped>
.todo-card {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 275px;
  height: 120px;
  margin: 0.75rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.todo-card.completed {
  border-left: 12px solid #0a8f08;
  background: #45a32b;
  background: linear-gradient(to right, #134700, #327e1d);
  text-decoration: line-through;
}

.todo-card.pending {
  border-left: 12px solid #b73229;
  background-color: #e52d27;
  background: linear-gradient(to right, #b31217, #e52d27);
}

.todo-card-text {
  margin: auto;
  padding: 0 8px;
}

.todo-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: rgb(50, 50, 50, 0.5);
}
</style>
