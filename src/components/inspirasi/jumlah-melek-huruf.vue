<script setup>
import { ref } from "vue";
import CountUp from "vue-countup-v3";

const School = ref([
  {
    title: "15 - 19",
    total: 99,
  },
  {
    title: "20 - 29",
    total: 99,
  },
  {
    title: "30 - 39",
    total: 98,
  },
  {
    title: "40 - 49",
    total: 97,
  },
  {
    title: "50 - 59",
    total: 92,
  },
  {
    title: "60 - 69",
    total: 79,
  },
  {
    title: "70+",
    total: 89,
  },
  {
    title: "Rata-rata",
    total: 93,
  },
]);
</script>

<template>
  <span class="absolute right-0 top-[90rem] z-0 h-40 w-40 opacity-50" style="background-color: #1fddff; filter: blur(8rem)"></span>
  <section class="z-10 mb-8 grid h-fit w-full grid-cols-2 grid-rows-4 place-items-center gap-5 lg:grid-cols-4 lg:grid-rows-2">
    <div
      v-for="(stats, index) in School"
      :key="index"
      class="grid h-full w-full cursor-default place-items-center rounded-xl border-2 border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 py-8 shadow-lg transition-all duration-300 ease-in-out"
      style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
    >
      <span class="flex h-fit w-fit">
        <CountUp
          :startVal="0"
          :endVal="stats.total"
          :duration="10"
          class="text-2xl font-bold"
        />
        <h5 class="text-2xl font-bold">%</h5>
      </span>
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
  transform: scale(0.9);
  filter: blur(0.25rem);
}
</style>