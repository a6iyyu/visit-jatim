<template>
  <div
    class="splide__slide h-full w-full grid place-items-center"
    v-for="(culinary, index) in dishes"
    :key="index"
  >
    <div
      class="h-full w-[95%] flex flex-col items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl transition-all duration-500 ease-in-out"
      :style="{ backgroundImage: 'url(' + culinary.img + ')' }"
    >
      <h4 class="h-1/5 w-3/4 text-3xl text-center text-slate-50 flex items-end justify-center cursor-default font-extrabold">
        {{ culinary.name }}
      </h4>
      <h5 class="h-1/5 w-3/4 text-1xl text-center text-slate-50 flex items-start justify-center cursor-default font-semibold">
        {{ culinary.origin }}
      </h5>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dataCulinary from "../data/culinary.json";

const dishes = ref(dataCulinary.culinary);
</script>