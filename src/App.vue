<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <header class="card-header">
        <h1>Primer Parcial</h1>
      </header>
      <main class="card-body">
        <br>
        <Navbar />
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
/* componentes de simple archivo (template, script y style) */
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.card-header {
  background-color: seagreen;
  color: white;
}
</style>
