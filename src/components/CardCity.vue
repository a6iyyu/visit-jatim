<template>
  <a
    :href="city.link"
    v-for="(city, index) in cities"
    :key="index"
    class="splide__slide flex h-full w-full flex-col justify-end rounded-3xl bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${city.img})` }"
    target="_blank"
  >
    <div class="z-40 flex h-2/5 w-full flex-col items-center justify-center">
      <h3 class="text-4xl font-black text-white transition-all duration-300 ease-in-out hover:text-slate-300">
        {{ city.city }}
      </h3>
      <h5 class="text-1xl font-medium text-white transition-all duration-300 ease-in-out hover:text-slate-300">
        {{ city.epithet }}
      </h5>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import cityData from "../data/city.json";

const cities = ref(cityData.cities);
</script>