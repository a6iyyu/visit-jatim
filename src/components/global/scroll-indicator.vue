<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const WidthScrollBar = ref(0);

const ScrollPercentage = () => {
  const HeightScroll = document.documentElement.scrollHeight - window.innerHeight;
  const Percentage = (window.scrollY / HeightScroll) * 100;
  WidthScrollBar.value = Percentage;
};

onMounted(() => window.addEventListener("scroll", ScrollPercentage));
onUnmounted(() => window.removeEventListener("scroll", ScrollPercentage));
</script>

<template>
  <section class="fixed inset-0 top-24 z-50 h-1 bg-blue-500 lg:top-36" :style="{ width: WidthScrollBar + '%' }"></section>
</template>