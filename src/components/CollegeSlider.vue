<template>
  <div
    class="splide__slide grid h-full w-full place-items-center"
    v-for="(college, index) in colleges"
    :key="index"
  >
    <a
      class="duration-750 z-30 grid h-full w-[95%] place-items-center rounded-xl bg-cover bg-center bg-no-repeat transition-all ease-in-out"
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