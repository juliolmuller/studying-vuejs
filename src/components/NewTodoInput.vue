<template>
  <form class="input-form" @submit.prevent="createTodo">
    <label for="newTodo" class="input-label">Insira uma nova tarefa</label>
    <div class="input-group">
      <input
        id="newTodo"
        type="text"
        class="input-control"
        placeholder="Insira uma nova tarefa"
        autofocus
        v-model="todo"
      />
      <button type="submit" class="input-submit" aria-label="salvar">&plus;</button>
    </div>
  </form>
</template>

<script>
export default {

  data: () => ({
    todo: '',
  }),

  methods: {
    createTodo() {
      this.$emit('create', this.todo)
      this.todo = ''
    },
  },
}
</script>

<style scoped>
.input-form {
  margin: 1rem 0 2rem;
  display: flex;
  justify-content: center;
}
.input-label {
  display: none;
}
.input-group {
  position: relative;
  display: inline-block;
}
.input-control, .input-submit {
  padding: 4px 8px;
  outline: none;
  border: 1px white solid;
  color: white;
  font-size: large;
}
.input-control {
  width: 500px;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 8px 0 0 8px;
}
.input-control:focus, .input-control:active {
  border: 1px lightgreen solid;
}
.input-control::placeholder {
  color: #aaa;
  font-size: medium;
  font-style: italic;
  font-weight: lighter;
}
.input-submit {
  margin-left: -1px;
  border-left: none;
  background-color: royalblue;
  border-radius: 0 8px 8px 0;
}
</style>
