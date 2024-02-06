<template>
  <li
    class="splide__slide h-full w-full flex flex-col justify-end rounded-3xl bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(/static/img/malang.jpg)' }"
  >
    <div class="h-2/5 w-full flex flex-col items-center justify-center z-40">
      <a
        href=""
        class="text-5xl font-black transition-all duration-300 ease-in-out text-red-700 hover:text-red-500"
      >
        MALANG
      </a>
      <!-- Ini buat naruh link google maps berdasarkan kota yang disebut -->
      <a
        href=""
        class="text-3xl font-medium transition-all duration-300 ease-in-out text-white hover:text-slate-200"
      >
        KOTA PENDIDIKAN
      </a>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import cityData from "../data/city.json";

const cities = ref(cityData.cities);
</script>