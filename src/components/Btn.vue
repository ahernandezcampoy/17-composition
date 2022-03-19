<template>
  <button @click="emitAction">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    btnText: String,
  },

  setup({ btnText }, context) {
    
    const emitAction = () => {
        context.emit("action");
    };

    return { btnText, emitAction };
  },
};
</script>
