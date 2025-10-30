
<template>
  <section class="card mb-3">
    <div class="card-header">
      <h2>Respuestas</h2>
    </div>

    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Numero de Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>c</td>
            </tr>
            <tr>
              <td>2</td>
              <td>c</td>
            </tr>
            <tr>
              <td>3</td>
              <td>a</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>

</template>

<script>

export default {
  name: 'respuestas',
  props: [],
}
</script>

<style scoped>
.card-header {
  background-color: indigo;
  color: white;
  text-align: center;
}
.card-body {
  margin-top: 15px;
  text-align: center;
}
</style>
