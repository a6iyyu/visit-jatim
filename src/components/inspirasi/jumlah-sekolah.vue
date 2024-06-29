<script setup>
import CountUp from "vue-countup-v3";
import { JumlahSekolah } from "@/data/jumlah-sekolah.vue";
</script>

<template>
  <span class="absolute right-0 top-[70rem] z-0 h-40 w-40 opacity-50" style="background-color: #1fddff; filter: blur(8rem)"></span>
  <section class="z-10 mb-20 grid h-fit w-full grid-cols-2 grid-rows-2 place-items-center gap-5 lg:grid-cols-4 lg:grid-rows-1 lg:gap-0 lg:gap-x-10">
    <div v-for="stats in JumlahSekolah" :key="stats.id" class="grid h-full w-full cursor-default place-items-center rounded-xl border-2 border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 py-8 shadow-lg transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc]">
      <CountUp :startVal="0" :endVal="stats.total" :duration="10" class="text-2xl font-bold" />
      <h4 class="mt-2">
        {{ stats.title }}
      </h4>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  section > div:hover {
    transform: scale(1.05);
  }
  section:hover > div:not(:hover) {
    transform: scale(0.95);
    filter: blur(0.25rem);
  }
}
@media screen and (max-width: 1024px) {
  section > div:hover,
  section:hover > div:not(:hover) {
    filter: blur(0);
    transform: scale(1);
  }
}
</style>