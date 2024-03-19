<template>
  <div
    class="splide__slide grid h-full w-full place-items-center transition-all duration-500 ease-in-out hover:scale-[1.035]"
    v-for="(culture, index) in cultures"
    :key="index"
  >
    <div
      class="flex h-full w-[95%] flex-col items-center justify-end rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      :style="{ backgroundImage: 'url(' + culture.img + ')' }"
    >
      <h4 class="flex h-1/5 w-3/4 cursor-default items-end justify-center text-center text-3xl font-extrabold text-slate-50">
        {{ culture.name }}
      </h4>
      <h5 class="text-1xl flex h-1/5 w-3/4 cursor-default items-start justify-center text-center font-semibold text-slate-50">
        {{ culture.origin }}
      </h5>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dataCulture from "../data/culture-images.json";

const cultures = ref(dataCulture.culture);
</script>