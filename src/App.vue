<template>
  <div id="app">
    <header>
      <h1>Lista de Afazeres</h1>
    </header>
    <main>

      <!-- TODO: other components -->
      <div style="flex: 1 0 auto;"></div>

    </main>
    <footer>
      <small>LacusSoft &copy; 2020 - Todos os direitos reservados</small>
    </footer>
  </div>
</template>

<script>
export default {

  data() {
    return {}
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

#app > footer {
  flex-shrink: 0;
  color: #ccc;
  font-size: small;
}
</style>
