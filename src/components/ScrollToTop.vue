<template>
  <div
    class="fixed bottom-8 right-8 z-30 grid h-[4.5rem] w-[4.5rem] cursor-pointer place-items-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-700 lg:h-24 lg:w-24"
    :class="{
      'visible opacity-100': showScroll,
      'invisible opacity-0': !showScroll,
    }"
    @click="scrollToTop"
  >
    <img src="/scroll-to-top.png?url" class="w-5 rotate-180 lg:w-6" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const showScroll = ref(false);

    const checkScrollTop = () => {
      if (!showScroll.value && window.scrollY > 25 * 16) {
        showScroll.value = true;
      } else if (showScroll.value && window.scrollY <= 25 * 16) {
        showScroll.value = false;
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    onMounted(() => {
      window.addEventListener("scroll", checkScrollTop);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", checkScrollTop);
    });
    return { showScroll, scrollToTop };
  },
};
</script>