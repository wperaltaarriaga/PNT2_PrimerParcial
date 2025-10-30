# Primer Parcial Programacion Nuevas Tecnologias - Conversor de Temperatura 

Este componente de Vue.js permite convertir una temperatura ingresada en grados Celsius a grados Fahrenheit y Kelvin cambiando dinámicamente el color del texto de las temperaturas convertidas según el rango de la temperatura ingresada.

## Características

- **Conversión de temperatura**:
  - Convierte grados Celsius a Fahrenheit utilizando la fórmula: `F = C * 1.8 + 32`.
  - Convierte grados Celsius a Kelvin utilizando la fórmula: `K = C + 273.15`.
- **Reactividad**:
  - La conversión es automática y reactiva. Al cambiar el valor ingresado en el campo de entrada, las temperaturas convertidas se actualizan inmediatamente.
- **Estilo dinámico**:
  - El color del texto de las temperaturas convertidas cambia según el rango de la temperatura ingresada:
    - Azul (`blue`) si la temperatura es menor o igual a 0 °C.
    - Magenta (`magenta`) si la temperatura está entre 0 °C y 15 °C.
    - Rojo (`red`) si la temperatura es mayor o igual a 15 °C.


## Ejemplo

Si ingresas `10` en el campo de entrada:
- **Fahrenheit**: `50.00`
- **Kelvin**: `283.15`
- **Color del texto**: Magenta (porque está entre 0 °C y 15 °C).


