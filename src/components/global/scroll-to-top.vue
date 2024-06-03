<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const ShowScroll = ref(false);

const CheckShowScroll = () => {
  if (!ShowScroll.value && window.scrollY > 25 * 16) {
    ShowScroll.value = true;
  } else if (ShowScroll.value && window.scrollY <= 25 * 16) {
    ShowScroll.value = false;
  }
};

const ScrollToTop = () => {
  window.scrollTo({ behavior: "smooth", top: 0 });
};

onMounted(() => window.addEventListener("scroll", CheckShowScroll));
onUnmounted(() => window.removeEventListener("scroll", CheckShowScroll));
</script>

<template>
  <section
    class="fixed bottom-8 right-8 z-50 grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out hover:bg-gray-200 lg:bottom-16 lg:right-16 lg:h-24 lg:w-24"
    :class="ShowScroll ? 'visible opacity-100' : 'invisible opacity-0'"
    @click="ScrollToTop"
  >
    <img src="/scroll-to-top.png" alt="Scroll To Top" class="w-12 text-center text-sm font-semibold text-gray-950 lg:w-16" />
  </section>
</template>