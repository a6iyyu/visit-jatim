<template>
  <div
    class="bg-blue-500 h-1 fixed inset-0 z-[999]"
    :style="{ width: scrollPercentage + '%' }"
  ></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const scrollPercentage = ref(0);
    const updateScrollPercentage = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (window.scrollY / scrollHeight) * 100;
      scrollPercentage.value = percentage;
    };
    onMounted(() => {
      window.addEventListener("scroll", updateScrollPercentage);
    });
    onUnmounted(() => {
      window.addEventListener("scroll", updateScrollPercentage);
    });
    return { scrollPercentage };
  },
};
</script>