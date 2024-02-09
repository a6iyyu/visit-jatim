<template>
  <a
    :href="destination.link"
    v-for="(destination, index) in places"
    :key="index"
    class="splide__slide h-full w-full flex items-end justify-center rounded-3xl bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(' + destination.img + ')' }"
  >
    <div class="h-2/5 w-full flex flex-col items-center justify-center">
      <h3
        class="text-5xl font-black transition-all duration-300 ease-in-out text-white hover:text-slate-300"
      >
        {{ destination.city }}
      </h3>
      <h5
        class="text-3xl font-medium transition-all duration-300 ease-in-out text-white hover:text-slate-300"
      >
        {{ destination.destination }}
      </h5>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import destinationData from "../data/destination.json";

const places = ref(destinationData.places);
</script>