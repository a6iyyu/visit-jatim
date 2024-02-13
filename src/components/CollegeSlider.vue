<template>
  <div
    class="splide__slide h-full w-full grid place-items-center cursor-pointer"
    v-for="(college, index) in colleges"
    :key="index"
  >
    <div
      class="h-full w-[95%] grid place-items-center bg-center bg-cover bg-no-repeat rounded-xl"
      :style="{ backgroundImage: 'url(' + college + ')' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import collegeData from "../data/college.json";

const colleges = ref(collegeData.colleges);
</script>