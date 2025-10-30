<template>
  <div class="temperature-converter card p-3 mt-4">
    <h2>Conversor de Temperatura</h2>
    <div class="form-group">
      <label for="celsius">Temperatura en °C:</label>
      <input
        id="celsius"
        type="number"
        v-model.number="celsius"
        class="form-control"
        placeholder="Ingrese la temperatura en °C"
      />
    </div>
    <p :style="{ color: getColor(celsius) }">
      Temperatura en °F: {{ fahrenheit.toFixed(2) }} <!-- le pone dos decimales -->
    </p>
    <p :style="{ color: getColor(celsius) }">
      Temperatura en K: {{ kelvin.toFixed(2) }} <!-- lo mismo -->
    </p>
  </div>
  <div class="card mt-4 p-3">
    <p>Respuestas: 1: C - 2:C - 3:A</p>
    <p>En la pestaña "Respuestas" están las respuestas en formato tabla :)</p>
  </div>
</template>

<script>
export default {
  name: "Conversor de Temperatura",
  data() {
    return {
      celsius: 0,
    };
  },
  computed: {
    fahrenheit() {
      return this.celsius * 1.8 + 32;
    },
    kelvin() {
      return this.celsius + 273.15;
    }
  },
  methods: {
    getColor(temp) {
      if (temp <= 0) return "blue";
      if (temp > 0 && temp < 15) return "magenta";
      return "red";
    }
  }
};
</script>

<style scoped>
.temperature-converter {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
