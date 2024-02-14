<template>
  <a
    :href="city.link"
    v-for="(city, index) in cities"
    :key="index"
    class="splide__slide h-full w-full flex flex-col justify-end rounded-3xl bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(' + city.img + ')' }"
    target="_blank"
  >
    <div class="h-2/5 w-full flex flex-col items-center justify-center z-40">
      <h3 class="text-4xl font-black transition-all duration-300 ease-in-out text-white hover:text-slate-300">
        {{ city.city }}
      </h3>
      <h5 class="text-1xl font-medium transition-all duration-300 ease-in-out text-white hover:text-slate-300">
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