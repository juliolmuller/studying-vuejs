<template>
  <div id="app">
    <header>
      <h1>Lista de Afazeres</h1>
    </header>
    <main>
      <progression-bar :progression="completion" />
      <new-todo-input @create="addTodo" />
      <div class="todos-grid" v-if="todos.length">
        <todo-card
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @delete="deleteTodo(index)"
        />
      </div>
      <div class="no-todos" v-else>
        <p>Você parece estar em dia com suas tarefas! 😎</p>
      </div>
    </main>
    <footer>
      <small>LacusSoft &copy; 2020 - Todos os direitos reservados</small>
    </footer>
  </div>
</template>

<script>
import ProgressionBar from './components/ProgressionBar.vue'
import NewTodoInput from './components/NewTodoInput.vue'
import TodoCard from './components/TodoCard.vue'

export default {

  components: {
    ProgressionBar,
    NewTodoInput,
    TodoCard,
  },

  data() {
    return {
      todos: [],
    }
  },

  computed: {
    completion() {
      const completedTodos = this.todos.reduce((count, todo) => count + todo.completed, 0)
      return Math.round(completedTodos / this.todos.length * 100) || 0
    },
  },

  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('my_todos', JSON.stringify(value))
      },
    },
  },

  methods: {
    addTodo(todo) {
      this.todos.push({
        task: todo,
        completed: false,
      })
    },
    deleteTodo(index) {
      if (confirm('Tem certeza de que deseja excluir essa tarefa?')) {
        this.todos.splice(index, 1)
      }
    },
  },

  created() {
    this.todos = JSON.parse(localStorage.getItem('my_todos')) || []
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
.todos-grid {
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  flex-wrap: wrap;
}
.no-todos {
  padding-top: 10rem;
  display: flex;
}
.no-todos > p {
  margin: auto;
  color: white;
  font-size: 1.5rem;
}
#app > footer {
  flex-shrink: 0;
  color: #ccc;
  font-size: small;
}
</style>
