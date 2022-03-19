<template>
  <div>
    <h1>{{ title }}</h1>

    <hr />
    
    <counter />
    <counter-bis />
    <btn btnText="Add" @action="addOne" />
    <btn btnText="Sub" @action="subOne" />
    <!-- <button @click="addOne">+</button>
    <button @click="subOne">-</button> -->

    <hr />

    <form>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="name" />
      <br /><br />
      <label for="person-name">Person name: </label>
      <input type="text" id="person-name" v-model="person.name" />
    </form>

    <p>Name value: {{ name }}</p>
    <p>Person value: {{ person }}</p>
    <p>Color value: {{ color }}</p>

    <hr />

    <h3>Posts from lifecycle hooks</h3>
    <p v-for="post in posts" :key="post.id">{{post.id}}. {{post.title}}</p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useCounter } from "../hooks/useCounter";
import Btn from "./Btn.vue";
import Counter from "./Counter.vue";
import CounterBis from "./CounterBis.vue";

export default {
  components: { Btn, Counter, CounterBis },

  name: "HelloWorld",

  props: {
    msg: String,
  },

  // Con la nueva Composition API tenemos un método que lo define todo.
  // Pero todo lo que queramos usar, hay que retornarlo
  setup(props) {
    // Podemos desestructurar "props" y pasar solo lo que nos interese
    // setup({ msg }) {
    const title = props.msg;

    const posts = ref([]);

    console.log(props.msg);
    // Si desestructuramos "props" no tendremos que hacer referencia a ella continuamente
    // console.log(msg);

    const name = ref("");

    // Hooks del ciclo de vida de Vue3
    onMounted(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      posts.value = data;
    });

    // Definimos objetos (que se pueden ir definiendo con las etiquetas v-model)
    const person = ref({});

    return { title, name, person, ...useCounter(), posts };
  },
};
</script>
