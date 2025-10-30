<template>
  <section class="card">
    <div class="card-header">
      <h2>Ingreso de Gastos</h2>
    </div>

    <div class="card-body">
      <form @submit.prevent="enviar()">

        <!-- Campo nombre -->
        <div class="form-group">
          <label for="nombre">nombre</label>
          <input id="nombre" type="text" class="form-control" v-model.trim="formData.nombre"
            @input="formDirty.nombre = true">
          <!-- carteles de validación -->
          <div v-if="errorCampos.nombre && formDirty.nombre" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- Campo dni -->
        <div class="form-group">
          <label for="dni">dni</label>
          <input id="dni" type="text" class="form-control" v-model.trim="formData.dni" @input="formDirty.dni = true">
          <!-- carteles de validación -->
          <div v-if="errorCampos.dni && formDirty.dni" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- Campo deuda -->
        <div class="form-group">
          <label for="deuda">deuda</label>
          <input id="deuda" type="number" class="form-control" v-model.trim="formData.deuda"
            @input="formDirty.deuda = true">
          <!-- carteles de validación -->
          <div v-if="errorCampos.deuda && formDirty.deuda" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- Campo pago -->
        <div class="form-group">
          <label for="pago">pago</label>
          <input id="pago" type="number" class="form-control" v-model.trim="formData.pago" @input="formDirty.pago = true">
          <!-- carteles de validación -->
          <div v-if="errorCampos.pago && formDirty.pago" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <button class="btn btn-success mt-4" :disabled="validarBotonEnvio()" type="submit">Enviar</button>
      </form>

      <br>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2>Detalle de Gastos</h2>
      <br>

      <div v-if="gastos.length" class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Deuda</th>
              <th>Pago</th>
              <th>Fecha</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(gasto, index) in gastos" :key="index" :style="{color: analizarSaldo(gasto).color}">
              <td>{{ gasto.nombre }}</td>
              <td>{{ gasto.dni }}</td>
              <td>{{ gasto.deuda }}</td>
              <td>{{ gasto.pago }}</td>
              <td>{{ gasto.fecha }}</td>
              <td>{{ analizarSaldo(gasto).valor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay gastos ingresados</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ingreso',
  props: [],
  mounted() {

  },

  data() {
    return {
      formData: this.getInitialData(),
      formDirty: this.getInitialData(),
      gastos: []
    }
  },

  methods: {
    getInitialData() {
      return {
        nombre: null,
        dni: null,
        deuda: null,
        pago: null
      }
    },

    validarBotonEnvio() {
      return (
        this.errorCampos.nombre ||
        this.errorCampos.dni ||
        this.errorCampos.deuda ||
        this.errorCampos.pago
      )
    },

    enviar() {
      let gasto = { ...this.formData }
      gasto.fecha = new Date().toLocaleString()

      //console.log(gasto)
      this.gastos.push(gasto)

      this.formData = this.getInitialData()
      this.formDirty = this.getInitialData()
    },

    analizarSaldo(gasto) {
      let dif = gasto.pago - gasto.deuda
      let color = '#080'
      if (dif > 0) color = '#00F'
      if (dif < 0) color = '#F00'
      return {
        valor: dif,
        color
      }
    }
  },

  computed: {
    errorCampos() {
      return {
        nombre: !this.formData.nombre,
        dni: !this.formData.dni,
        deuda: !this.formData.deuda,
        pago: !this.formData.pago
      }
    }
  }
}
</script>

<style scoped>
.card-header {
  background-color: brown;
  color: white;
}

label {
  text-transform: capitalize;
  margin-top: 10px;
}

.table {
  --bs-table-color: initial;
}
</style>
