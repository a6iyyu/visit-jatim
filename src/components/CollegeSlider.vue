<template>
  <div
    class="splide__slide h-full w-full grid place-items-center"
    v-for="(college, index) in colleges"
    :key="index"
  >
    <a
      class="h-full w-[95%] grid place-items-center bg-center bg-cover bg-no-repeat rounded-xl z-30 transition-all duration-750 ease-in-out"
      :style="{ backgroundImage: 'url(' + college.img + ')' }"
      :href="college.link"
    ></a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import collegeData from "../data/college.json";

const colleges = ref(collegeData.colleges);
</script>