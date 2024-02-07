<template>
  <li
    v-for="(city, index) in cities"
    :key="index"
    class="splide__slide h-full w-full flex flex-col justify-end rounded-3xl bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(' + city.img + ')' }"
  >
    <div class="h-2/5 w-full flex flex-col items-center justify-center z-40">
      <a
        href=""
        class="text-5xl font-black transition-all duration-300 ease-in-out text-white hover:text-slate-400"
      >
        {{ city.city }}
      </a>
      <a
        href=""
        class="text-3xl font-medium transition-all duration-300 ease-in-out text-white hover:text-slate-400"
      >
        {{ city.epithet }}
      </a>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import cityData from "../data/city.json";

const cities = ref(cityData.cities);
</script>