<template>
  <form class="input-form" @submit.prevent="createTodo">
    <label for="newTodo" class="input-label">Insira uma nova tarefa</label>
    <div class="input-group">
      <input id="newTodo" type="text" class="input-control" v-model="todo" placeholder="Insira uma nova tarefa" autofocus />
      <button type="submit" class="input-submit" aria-label="salvar">&plus;</button>
    </div>
  </form>
</template>

<script>
export default {

  data() {
    return {
      todo: '',
    }
  },

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
  background-color: rgb(200, 200, 200, 0.5);
  border-radius: 8px 0 0 8px;
}
.input-control:focus, .input-control:active {
  border: 1px lightgreen solid;
}
.input-control::placeholder {
  color: #ccc;
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
