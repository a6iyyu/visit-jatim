<script setup>
import CountUp from "vue-countup-v3";
import { DataJawaTimur } from "@/data/data-jawa-timur.vue"
</script>

<template>
  <span class="absolute right-0 top-[80rem] z-0 h-40 w-40 bg-[#1fddff] [filter:blur(8rem)]"></span>
  <section class="z-30 mx-auto grid h-fit w-3/4 grid-cols-1 place-items-center gap-x-10 rounded-xl border border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 shadow-lg [box-shadow:0.3rem_0.3rem_0_#bcbcbc] lg:w-4/5 lg:grid-cols-3">
    <div class="my-8 cursor-default text-gray-50" v-for="number in DataJawaTimur" :key="number.id">
      <img :src="number.img" :alt="number.alt" width="100" class="mx-auto mb-4" />
      <CountUp :startVal="0" :endVal="number.total" :duration="10" class="text-center text-2xl font-bold" />
      <h5 class="mt-2 text-center text-lg font-medium">
        {{ number.title }}
      </h5>
    </div>
  </section>
</template>