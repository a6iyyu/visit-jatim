<template>
  <div
    class="splide__slide grid h-full w-full place-items-center"
    v-for="(tips, index) in collegeEntry"
    :key="index"
  >
    <div class="grid h-full w-[95%] place-items-center rounded-xl bg-gray-950 transition-all duration-500 ease-in-out">
      <p class="m-auto flex h-3/5 w-3/5 cursor-default flex-col items-start justify-start text-3xl font-semibold text-slate-50">
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