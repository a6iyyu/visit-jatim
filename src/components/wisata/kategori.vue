<script setup>
import { ref } from "vue";

const categories = ref([
  {
    title: "",
    image: "",
    alt: "",
  },
  {
    title: "",
    image: "",
    alt: "",
  },
  {
    title: "",
    image: "",
    alt: "",
  },
]);
</script>

<template>
  <main class="mx-auto flex h-fit w-4/5 items-center justify-center">
    <section
      v-for="(category, index) in categories"
      :key="index"
      class=""
    ></section>
  </main>
</template>

<style scoped></style>