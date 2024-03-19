<script lang="ts" setup>
import { ref, defineProps } from "vue";

const props = defineProps(["data"]);
const array = ref([...props.data].sort(() => Math.random() - 0.5).slice(0, 6));
</script>

<template>
  <div class="grid h-fit w-full items-center gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
    <a
      :href="content.link"
      v-for="content in array"
      :key="content.id"
      :style="{ 'background-image': 'url(' + content.img + ')' }"
      class="mx-auto flex h-64 w-full cursor-pointer flex-col items-center justify-end bg-cover object-cover object-center"
      data-aos="fade-up"
    >
      <div class="z-20 min-h-full min-w-full bg-gradient-to-t from-black opacity-50 transition-opacity duration-100 hover:opacity-70"></div>
      <div class="absolute z-20 flex max-w-72 flex-col items-center text-center font-semibold text-slate-100">
        <h3 class="mx-7 my-1 md:text-xl lg:text-2xl">
          {{ content.destination }}
        </h3>
        <h4 class="mb-6 md:text-base lg:text-lg">
          {{ content.city }}
        </h4>
      </div>
    </a>
  </div>
</template>