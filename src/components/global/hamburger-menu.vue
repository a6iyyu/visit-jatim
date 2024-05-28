<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const ShowHamburgerMenu = ref(false);
const Menus = ["Inspirasi", "Penduduk", "Wisata"];

const ToggleMenu = (e) => {
  if (document.querySelector("i").contains(e.target)) {
    ShowHamburgerMenu.value = !ShowHamburgerMenu.value;
  } else if (!document.querySelector("main").contains(e.target)) {
    ShowHamburgerMenu.value = false;
  }
};

onMounted(() => document.body.addEventListener("click", ToggleMenu));
onUnmounted(() => document.body.removeEventListener("click", ToggleMenu));
</script>

<template>
  <i class="fa-solid fa-bars flex cursor-pointer text-3xl text-gray-50"></i>
  <main
    class="absolute top-20 flex flex-col rounded-2xl bg-slate-50 p-0 text-base font-semibold text-gray-950 lg:top-32 lg:hidden lg:text-lg"
    v-if="ShowHamburgerMenu"
  >
    <a
      v-for="menu in Menus"
      :href="`/${menu.toLowerCase()}`"
      :key="menu"
      class="mx-auto h-fit w-full py-5 text-center transition-all duration-300 ease-in-out first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-200"
    >
      {{ menu }}
    </a>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main {
    animation: fade-down 300ms ease-in-out;
  }
}
@media screen and (min-width: 1024px) {
  i {
    display: none;
  }
}
@keyframes fade-down {
  from {
    transform: translateY(-1.5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>