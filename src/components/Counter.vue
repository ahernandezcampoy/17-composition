<template>
  <h2 :style="{ color: color }">Counter: {{ counter }}</h2>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
      // Con "inject" podemos recoger variables globales para usarlas
    const counter = inject("counter");
    const color = inject("color");
    return { counter, color };
  },
};
</script>

<style></style>
