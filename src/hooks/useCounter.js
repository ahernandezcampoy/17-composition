import { ref, computed, provide } from "vue";

export function useCounter() {
  // Creamos referencias a objetos para poderlos modificar
  const counter = ref(0);

  // Lo que realmente se modifica es la propiedad "value"
  // que adquiere al convertirlo en referencia
  const addOne = () => counter.value++;
  const subOne = () => counter.value--;

  // Para los computados hay que recordar retornar el resultado,
  // de lo contrario no veremos los cambios
  const color = computed(() => {
    return counter.value < 0 ? "red" : "green";
  });

  // Con "provide" podemos definir variables "globales",
  // utilizables en todo el código
  provide("counter", counter);
  provide("color", color);

  return { counter, addOne, subOne, color };
}
