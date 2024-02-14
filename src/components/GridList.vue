<script lang="ts" setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps(["data", "selected"]);
const array = ref([...props.data].sort(() => Math.random() - 0.5).slice(0, 6));
// const selectedProps = ref(props.selected);
</script>

<template>
  <!-- nilai: {{ array }} -->
  <div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
    <a :href="content.link" v-for="content in array" :key="content" :style="{ 'background-image': 'url(' + content.img + ')' }"
      class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer">
      <div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-30 hover:opacity-70 transition-opacity duration-100 z-20"></div>
      <div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center">
        <h3 class="md:text-xl lg:text-2xl my-1 mx-7">
          {{ content.destination }}
        </h3>
        <h4 class="md:text-base lg:text-lg mb-6">{{ content.city }}</h4>
      </div>
    </a>
  </div>
</template>