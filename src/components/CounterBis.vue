<template>
  <h4>{{ counter }} - {{ color }}</h4>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const counter = inject("counter");
    const color = inject("color");

    return { counter, color };
  },
};
</script>
