<template>
  <div
    class="splide__slide h-full w-full grid place-items-center"
    v-for="(tips, index) in collegeEntry"
    :key="index"
  >
    <div class="h-full w-[95%] grid place-items-center rounded-xl bg-gray-950">
      <p class="h-3/5 w-3/5 text-3xl text-slate-50 flex flex-col items-start justify-start cursor-default font-semibold m-auto">
        {{ tips.num }}
        <br /><br />
        {{ tips.tips }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import dataCollegeEntryTips from "../data/college-entry-tips.json";

const collegeEntry = ref(dataCollegeEntryTips.tips);
</script>