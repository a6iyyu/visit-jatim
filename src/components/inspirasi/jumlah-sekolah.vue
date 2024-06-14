<script setup>
import { ref } from "vue";
import CountUp from "vue-countup-v3";

const School = ref([
  {
    title: "SD",
    total: 19013,
  },
  {
    title: "SMP",
    total: 5051,
  },
  {
    title: "SMA",
    total: 1519,
  },
  {
    title: "SMK",
    total: 2158,
  },
]);
</script>

<template>
  <span class="absolute right-0 top-[70rem] z-0 h-40 w-40 opacity-50" style="background-color: #1fddff; filter: blur(8rem)"></span>
  <section class="z-10 mb-20 grid h-fit w-full grid-cols-2 grid-rows-2 place-items-center gap-5 lg:grid-cols-4 lg:grid-rows-1 lg:gap-0 lg:gap-x-10">
    <div
      v-for="(stats, index) in School"
      :key="index"
      class="grid h-full w-full cursor-default place-items-center rounded-xl border-2 border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 py-8 shadow-lg transition-all duration-300 ease-in-out"
      style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
    >
      <CountUp
        :startVal="0"
        :endVal="stats.total"
        :duration="10"
        class="text-2xl font-bold"
      />
      <h4 class="mt-2">
        {{ stats.title }}
      </h4>
    </div>
  </section>
</template>

<style scoped>
section > div:hover {
  filter: blur(0);
  transform: scale(1.05);
}
section:hover > div:not(:hover) {
  transform: scale(0.95);
  filter: blur(0.25rem);
}
</style>