<template>
  <div
    class="h-[4.5rem] w-[4.5rem] lg:h-24 lg:w-24 bg-gray-800 cursor-pointer rounded-full fixed grid place-items-center z-30 hover:bg-gray-700 transition-all duration-300 ease-in-out bottom-8 right-8"
    :class="{
      'visible opacity-100': showScroll,
      'invisible opacity-0': !showScroll,
    }"
    @click="scrollToTop"
  >
    <img src="/scroll-to-top.png?url" class="rotate-180 w-5 lg:w-6" />
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