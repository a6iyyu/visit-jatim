<script setup>
import { FaktaJawaTimur } from "@/data/fakta-jawa-timur.vue";
</script>

<template>
  <span class="absolute left-0 top-[125rem] z-0 h-40 w-40 bg-[#be3475] [filter:blur(8rem)]"></span>
  <span class="absolute right-0 top-[160rem] z-0 h-40 w-40 bg-[#2c862c] [filter:blur(8rem)]"></span>
  <main class="z-20 mx-auto mb-20 mt-8 h-full w-4/5">
    <section v-for="fakta in FaktaJawaTimur" :key="fakta.id" class="mt-20 flex h-fit w-full flex-col-reverse items-center justify-between xl:flex-row">
      <div class="mt-8 flex h-fit w-full cursor-default flex-col xl:mt-0 xl:w-2/5">
        <h3 class="text-center text-4xl font-bold text-gray-50 xl:text-justify">
          {{ fakta.title }}
        </h3>
        <h5 class="mt-4 text-justify text-lg font-medium text-gray-50">
          {{ fakta.description }}
        </h5>
      </div>
      <img :src="fakta.img" :alt="fakta.alt" class="w-full font-bold text-gray-50 [box-shadow:0.5rem_0.5rem_0_#bcbcbc] xl:w-[55%]" />
    </section>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main section:nth-child(2) {
    flex-direction: row-reverse;
  }
}
@media screen and (max-width: 1279px) {
  main section:nth-child(2) {
    flex-direction: column-reverse;
  }
}
</style>