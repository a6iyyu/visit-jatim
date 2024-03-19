<template>
  <div
    class="splide__slide grid h-full w-full place-items-center"
    v-for="(citizen, index) in citizens"
    :key="index"
  >
    <div
      class="h-full w-[95%] rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      :style="{ backgroundImage: 'url(' + citizen + ')' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import citizensImageData from "../data/citizens-image.json";

const citizens = ref(citizensImageData.img);
</script>