<template>
  <div id="app">
    <header>
      <h1>Lista de Afazeres</h1>
    </header>
    <main>
      <progression-bar :progression="completion" />
      <new-todo-input @create="addTodo" />

      <!-- TODO: other components -->
      <div style="flex: 1 0 auto;"></div>

    </main>
    <footer>
      <small>LacusSoft &copy; 2020 - Todos os direitos reservados</small>
    </footer>
  </div>
</template>

<script>
import ProgressionBar from './components/ProgressionBar.vue'
import NewTodoInput from './components/NewTodoInput.vue'

function* idCreator(nextId) {
  let index = nextId
  while (index) {
    yield index++
  }
}

export default {

  components: {
    ProgressionBar,
    NewTodoInput,
  },

  data() {
    return {
      todos: [],
      generator: idCreator(1),
    }
  },

  computed: {
    completion() {
      // TODO: (number of completed tasks) / (number of tasks)
      return 40
    },
  },

  methods: {
    getNextId() {
      return this.generator.next().value
    },
    addTodo(todo) {
      this.todos.push({
        id: this.getNextId(),
        task: todo,
        completed: false,
      })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

body {
  font-family: 'Cabin', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app > header {
  flex-shrink: 0;
}

#app > header > h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

#app > main {
  flex: 1 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.progress-bar {
  flex-shrink: 0;
}

#app > footer {
  flex-shrink: 0;
  color: #ccc;
  font-size: small;
}
</style>
