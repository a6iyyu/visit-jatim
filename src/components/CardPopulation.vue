<template>
  <div
    class="splide__slide h-full w-full grid place-items-center"
    v-for="(citizen, index) in citizens"
    :key="index"
  >
    <div
      class="h-full w-[95%] bg-center bg-cover bg-no-repeat rounded-xl"
      :style="{ backgroundImage: 'url(' + citizen + ')' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import citizensImageData from "../data/citizens-image.json";

const citizens = ref(citizensImageData.img);
</script>