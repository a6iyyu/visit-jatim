<script setup>
import { ref } from "vue";
import HamburgerMenu from "./hamburger-menu.vue";

const menus = ["Inspirasi", "Penduduk", "Wisata"];
const HeaderSticky = ref(false);

window.addEventListener("scroll", () => (HeaderSticky.value = window.scrollY > 5));
</script>

<template>
  <header
    class="fixed top-0 z-50 grid h-24 w-full place-items-center transition-all duration-300 ease-in-out lg:h-36"
    :class="HeaderSticky ? 'bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg' : 'bg-none'"
  >
    <nav class="flex h-full w-4/5">
      <section class="flex h-full w-2/5 items-center">
        <a href="/" class="h-fit w-fit">
          <img
            src="/logo-white.png"
            alt="Logo"
            class="w-16 font-semibold text-gray-50 lg:w-[6.25rem]"
          />
        </a>
      </section>
      <section class="flex h-full w-3/5 items-center justify-end">
        <a
          v-for="menu in menus"
          :href="`/${menu.toLowerCase()}`"
          class="hidden font-black text-white transition-all duration-300 ease-in-out [letter-spacing:0.1rem] hover:text-gray-200 hover:underline lg:flex"
        >
          {{ menu }}
        </a>
        <HamburgerMenu />
      </section>
    </nav>
  </header>
</template>

<style>
nav section:last-child a:not(a:nth-child(3)) {
  margin-right: 5em;
}
</style>